/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthIndexImport } from './routes/auth/index'
import { Route as protectedLayoutImport } from './routes/(protected)/_layout'
import { Route as protectedLayoutTransactionsIndexImport } from './routes/(protected)/_layout/transactions/index'
import { Route as protectedLayoutDashboardIndexImport } from './routes/(protected)/_layout/dashboard/index'
import { Route as protectedLayoutBudgetIndexImport } from './routes/(protected)/_layout/budget/index'
import { Route as protectedLayoutAnalyticsIndexImport } from './routes/(protected)/_layout/analytics/index'

// Create Virtual Routes

const protectedImport = createFileRoute('/(protected)')()

// Create/Update Routes

const protectedRoute = protectedImport.update({
  id: '/(protected)',
  getParentRoute: () => rootRoute,
} as any)

const AuthIndexRoute = AuthIndexImport.update({
  path: '/auth/',
  getParentRoute: () => rootRoute,
} as any)

const protectedLayoutRoute = protectedLayoutImport.update({
  id: '/_layout',
  getParentRoute: () => protectedRoute,
} as any)

const protectedLayoutTransactionsIndexRoute =
  protectedLayoutTransactionsIndexImport.update({
    path: '/transactions/',
    getParentRoute: () => protectedLayoutRoute,
  } as any)

const protectedLayoutDashboardIndexRoute =
  protectedLayoutDashboardIndexImport.update({
    path: '/dashboard/',
    getParentRoute: () => protectedLayoutRoute,
  } as any)

const protectedLayoutBudgetIndexRoute = protectedLayoutBudgetIndexImport.update(
  {
    path: '/budget/',
    getParentRoute: () => protectedLayoutRoute,
  } as any,
)

const protectedLayoutAnalyticsIndexRoute =
  protectedLayoutAnalyticsIndexImport.update({
    path: '/analytics/',
    getParentRoute: () => protectedLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/(protected)': {
      id: '/(protected)'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof protectedImport
      parentRoute: typeof rootRoute
    }
    '/(protected)/_layout': {
      id: '/(protected)/_layout'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof protectedLayoutImport
      parentRoute: typeof protectedRoute
    }
    '/auth/': {
      id: '/auth/'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthIndexImport
      parentRoute: typeof rootRoute
    }
    '/(protected)/_layout/analytics/': {
      id: '/(protected)/_layout/analytics/'
      path: '/analytics'
      fullPath: '/analytics'
      preLoaderRoute: typeof protectedLayoutAnalyticsIndexImport
      parentRoute: typeof protectedLayoutImport
    }
    '/(protected)/_layout/budget/': {
      id: '/(protected)/_layout/budget/'
      path: '/budget'
      fullPath: '/budget'
      preLoaderRoute: typeof protectedLayoutBudgetIndexImport
      parentRoute: typeof protectedLayoutImport
    }
    '/(protected)/_layout/dashboard/': {
      id: '/(protected)/_layout/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof protectedLayoutDashboardIndexImport
      parentRoute: typeof protectedLayoutImport
    }
    '/(protected)/_layout/transactions/': {
      id: '/(protected)/_layout/transactions/'
      path: '/transactions'
      fullPath: '/transactions'
      preLoaderRoute: typeof protectedLayoutTransactionsIndexImport
      parentRoute: typeof protectedLayoutImport
    }
  }
}

// Create and export the route tree

interface protectedLayoutRouteChildren {
  protectedLayoutAnalyticsIndexRoute: typeof protectedLayoutAnalyticsIndexRoute
  protectedLayoutBudgetIndexRoute: typeof protectedLayoutBudgetIndexRoute
  protectedLayoutDashboardIndexRoute: typeof protectedLayoutDashboardIndexRoute
  protectedLayoutTransactionsIndexRoute: typeof protectedLayoutTransactionsIndexRoute
}

const protectedLayoutRouteChildren: protectedLayoutRouteChildren = {
  protectedLayoutAnalyticsIndexRoute: protectedLayoutAnalyticsIndexRoute,
  protectedLayoutBudgetIndexRoute: protectedLayoutBudgetIndexRoute,
  protectedLayoutDashboardIndexRoute: protectedLayoutDashboardIndexRoute,
  protectedLayoutTransactionsIndexRoute: protectedLayoutTransactionsIndexRoute,
}

const protectedLayoutRouteWithChildren = protectedLayoutRoute._addFileChildren(
  protectedLayoutRouteChildren,
)

interface protectedRouteChildren {
  protectedLayoutRoute: typeof protectedLayoutRouteWithChildren
}

const protectedRouteChildren: protectedRouteChildren = {
  protectedLayoutRoute: protectedLayoutRouteWithChildren,
}

const protectedRouteWithChildren = protectedRoute._addFileChildren(
  protectedRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof protectedLayoutRouteWithChildren
  '/auth': typeof AuthIndexRoute
  '/analytics': typeof protectedLayoutAnalyticsIndexRoute
  '/budget': typeof protectedLayoutBudgetIndexRoute
  '/dashboard': typeof protectedLayoutDashboardIndexRoute
  '/transactions': typeof protectedLayoutTransactionsIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof protectedLayoutRouteWithChildren
  '/auth': typeof AuthIndexRoute
  '/analytics': typeof protectedLayoutAnalyticsIndexRoute
  '/budget': typeof protectedLayoutBudgetIndexRoute
  '/dashboard': typeof protectedLayoutDashboardIndexRoute
  '/transactions': typeof protectedLayoutTransactionsIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(protected)': typeof protectedRouteWithChildren
  '/(protected)/_layout': typeof protectedLayoutRouteWithChildren
  '/auth/': typeof AuthIndexRoute
  '/(protected)/_layout/analytics/': typeof protectedLayoutAnalyticsIndexRoute
  '/(protected)/_layout/budget/': typeof protectedLayoutBudgetIndexRoute
  '/(protected)/_layout/dashboard/': typeof protectedLayoutDashboardIndexRoute
  '/(protected)/_layout/transactions/': typeof protectedLayoutTransactionsIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/auth'
    | '/analytics'
    | '/budget'
    | '/dashboard'
    | '/transactions'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/auth' | '/analytics' | '/budget' | '/dashboard' | '/transactions'
  id:
    | '__root__'
    | '/(protected)'
    | '/(protected)/_layout'
    | '/auth/'
    | '/(protected)/_layout/analytics/'
    | '/(protected)/_layout/budget/'
    | '/(protected)/_layout/dashboard/'
    | '/(protected)/_layout/transactions/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  protectedRoute: typeof protectedRouteWithChildren
  AuthIndexRoute: typeof AuthIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  protectedRoute: protectedRouteWithChildren,
  AuthIndexRoute: AuthIndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/(protected)",
        "/auth/"
      ]
    },
    "/(protected)": {
      "filePath": "(protected)",
      "children": [
        "/(protected)/_layout"
      ]
    },
    "/(protected)/_layout": {
      "filePath": "(protected)/_layout.tsx",
      "parent": "/(protected)",
      "children": [
        "/(protected)/_layout/analytics/",
        "/(protected)/_layout/budget/",
        "/(protected)/_layout/dashboard/",
        "/(protected)/_layout/transactions/"
      ]
    },
    "/auth/": {
      "filePath": "auth/index.tsx"
    },
    "/(protected)/_layout/analytics/": {
      "filePath": "(protected)/_layout/analytics/index.tsx",
      "parent": "/(protected)/_layout"
    },
    "/(protected)/_layout/budget/": {
      "filePath": "(protected)/_layout/budget/index.tsx",
      "parent": "/(protected)/_layout"
    },
    "/(protected)/_layout/dashboard/": {
      "filePath": "(protected)/_layout/dashboard/index.tsx",
      "parent": "/(protected)/_layout"
    },
    "/(protected)/_layout/transactions/": {
      "filePath": "(protected)/_layout/transactions/index.tsx",
      "parent": "/(protected)/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
