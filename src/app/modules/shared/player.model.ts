export interface Player {
  uid: string;
  email: string | null;
  photoURL?: string | null;
  displayName?: string | null;
  online: boolean;
}
