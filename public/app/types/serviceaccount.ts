import { WithAccessControlMetadata } from '@grafana/data';
import { ApiKey, OrgRole } from '.';

export interface OrgServiceAccount {
  serviceAccountId: number;
  avatarUrl: string;
  email: string;
  login: string;
  name: string;
  displayName: string;
  orgId: number;
  role: OrgRole;
  tokens: number[];
}

export interface ServiceAccount {
  id: number;
  label: string;
  avatarUrl: string;
  login: string;
  email: string;
  name: string;
  displayName: string;
  orgId?: number;
}

export interface ServiceAccountDTO extends WithAccessControlMetadata {
  id: number;
  orgId: number;
  tokens: number;
  name: string;
  login: string;
  avatarUrl?: string;
  role: string;
}

export interface ServiceAccountProfileState {
  serviceAccount: ServiceAccountDTO;
  isLoading: boolean;
  tokens: ApiKey[];
}

export interface ServiceAccountsState {
  serviceAccounts: ServiceAccountDTO[];
  searchQuery: string;
  searchPage: number;
  isLoading: boolean;
}
