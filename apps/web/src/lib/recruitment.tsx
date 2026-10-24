'use client';
/**
 * Recruitment window status shared by every "Apply" call to action. The portal
 * only opens for short windows (usually twice a year), so apply buttons are
 * rendered only while an exercise is open. One request per page load, read
 * from the public, CDN-cached /reference/exercise endpoint.
 */
import { useEffect, useState } from 'react';
import { api } from '@/lib/api';

export interface Exercise { open: boolean; title?: string; closesAt?: string; opensAt?: string }

let pending: Promise<Exercise> | null = null;
const fetchExercise = () =>
  (pending ??= api<Exercise>('/reference/exercise', { maxRetries: 1 }).catch(() => ({ open: false })));

/** null while loading, then the current exercise status. */
export function useRecruitment() {
  const [ex, setEx] = useState<Exercise | null>(null);
  useEffect(() => {
    let live = true;
    fetchExercise().then((e) => live && setEx(e));
    return () => { live = false; };
  }, []);
  return ex;
}

/** Renders its children only while a recruitment exercise is open; otherwise the fallback (if any). */
export function WhenRecruiting({ children, fallback = null }: { children: React.ReactNode; fallback?: React.ReactNode }) {
  const ex = useRecruitment();
  if (ex === null) return null;
  return <>{ex.open ? children : fallback}</>;
}
