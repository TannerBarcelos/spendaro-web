/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AuthIndexImport } from './routes/auth/index'
import { Route as protectedAppImport } from './routes/(protected)/_app'
import { Route as protectedAppTransactionsIndexImport } from './routes/(protected)/_app/transactions/index'
import { Route as protectedAppReportingIndexImport } from './routes/(protected)/_app/reporting/index'
import { Route as protectedAppProfileIndexImport } from './routes/(protected)/_app/profile/index'
import { Route as protectedAppDashboardIndexImport } from './routes/(protected)/_app/dashboard/index'
import { Route as protectedAppBudgetingIndexImport } from './routes/(protected)/_app/budgeting/index'
import { Route as protectedAppTransactionsNewImport } from './routes/(protected)/_app/transactions/new'
import { Route as protectedAppReportingNewImport } from './routes/(protected)/_app/reporting/new'
import { Route as protectedAppReportingManageImport } from './routes/(protected)/_app/reporting/manage'
import { Route as protectedAppBudgetingNewImport } from './routes/(protected)/_app/budgeting/new'
import { Route as protectedAppBudgetingBudgetIdIndexImport } from './routes/(protected)/_app/budgeting/$budgetId/index'
import { Route as protectedAppTransactionsTransactionIdEditImport } from './routes/(protected)/_app/transactions/$transactionId.edit'
import { Route as protectedAppBudgetingBudgetIdEditImport } from './routes/(protected)/_app/budgeting/$budgetId/edit'
import { Route as protectedAppBudgetingBudgetIdCategoriesImport } from './routes/(protected)/_app/budgeting/$budgetId/categories'

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

const protectedAppRoute = protectedAppImport.update({
  id: '/_app',
  getParentRoute: () => protectedRoute,
} as any)

const protectedAppTransactionsIndexRoute =
  protectedAppTransactionsIndexImport.update({
    path: '/transactions/',
    getParentRoute: () => protectedAppRoute,
  } as any)

const protectedAppReportingIndexRoute = protectedAppReportingIndexImport.update(
  {
    path: '/reporting/',
    getParentRoute: () => protectedAppRoute,
  } as any,
)

const protectedAppProfileIndexRoute = protectedAppProfileIndexImport.update({
  path: '/profile/',
  getParentRoute: () => protectedAppRoute,
} as any)

const protectedAppDashboardIndexRoute = protectedAppDashboardIndexImport.update(
  {
    path: '/dashboard/',
    getParentRoute: () => protectedAppRoute,
  } as any,
)

const protectedAppBudgetingIndexRoute = protectedAppBudgetingIndexImport.update(
  {
    path: '/budgeting/',
    getParentRoute: () => protectedAppRoute,
  } as any,
)

const protectedAppTransactionsNewRoute =
  protectedAppTransactionsNewImport.update({
    path: '/transactions/new',
    getParentRoute: () => protectedAppRoute,
  } as any)

const protectedAppReportingNewRoute = protectedAppReportingNewImport.update({
  path: '/reporting/new',
  getParentRoute: () => protectedAppRoute,
} as any)

const protectedAppReportingManageRoute =
  protectedAppReportingManageImport.update({
    path: '/reporting/manage',
    getParentRoute: () => protectedAppRoute,
  } as any)

const protectedAppBudgetingNewRoute = protectedAppBudgetingNewImport.update({
  path: '/budgeting/new',
  getParentRoute: () => protectedAppRoute,
} as any)

const protectedAppBudgetingBudgetIdIndexRoute =
  protectedAppBudgetingBudgetIdIndexImport.update({
    path: '/budgeting/$budgetId/',
    getParentRoute: () => protectedAppRoute,
  } as any)

const protectedAppTransactionsTransactionIdEditRoute =
  protectedAppTransactionsTransactionIdEditImport.update({
    path: '/transactions/$transactionId/edit',
    getParentRoute: () => protectedAppRoute,
  } as any)

const protectedAppBudgetingBudgetIdEditRoute =
  protectedAppBudgetingBudgetIdEditImport.update({
    path: '/budgeting/$budgetId/edit',
    getParentRoute: () => protectedAppRoute,
  } as any)

const protectedAppBudgetingBudgetIdCategoriesRoute =
  protectedAppBudgetingBudgetIdCategoriesImport.update({
    path: '/budgeting/$budgetId/categories',
    getParentRoute: () => protectedAppRoute,
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
    '/(protected)/_app': {
      id: '/(protected)/_app'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof protectedAppImport
      parentRoute: typeof protectedRoute
    }
    '/auth/': {
      id: '/auth/'
      path: '/auth'
      fullPath: '/auth'
      preLoaderRoute: typeof AuthIndexImport
      parentRoute: typeof rootRoute
    }
    '/(protected)/_app/budgeting/new': {
      id: '/(protected)/_app/budgeting/new'
      path: '/budgeting/new'
      fullPath: '/budgeting/new'
      preLoaderRoute: typeof protectedAppBudgetingNewImport
      parentRoute: typeof protectedAppImport
    }
    '/(protected)/_app/reporting/manage': {
      id: '/(protected)/_app/reporting/manage'
      path: '/reporting/manage'
      fullPath: '/reporting/manage'
      preLoaderRoute: typeof protectedAppReportingManageImport
      parentRoute: typeof protectedAppImport
    }
    '/(protected)/_app/reporting/new': {
      id: '/(protected)/_app/reporting/new'
      path: '/reporting/new'
      fullPath: '/reporting/new'
      preLoaderRoute: typeof protectedAppReportingNewImport
      parentRoute: typeof protectedAppImport
    }
    '/(protected)/_app/transactions/new': {
      id: '/(protected)/_app/transactions/new'
      path: '/transactions/new'
      fullPath: '/transactions/new'
      preLoaderRoute: typeof protectedAppTransactionsNewImport
      parentRoute: typeof protectedAppImport
    }
    '/(protected)/_app/budgeting/': {
      id: '/(protected)/_app/budgeting/'
      path: '/budgeting'
      fullPath: '/budgeting'
      preLoaderRoute: typeof protectedAppBudgetingIndexImport
      parentRoute: typeof protectedAppImport
    }
    '/(protected)/_app/dashboard/': {
      id: '/(protected)/_app/dashboard/'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof protectedAppDashboardIndexImport
      parentRoute: typeof protectedAppImport
    }
    '/(protected)/_app/profile/': {
      id: '/(protected)/_app/profile/'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof protectedAppProfileIndexImport
      parentRoute: typeof protectedAppImport
    }
    '/(protected)/_app/reporting/': {
      id: '/(protected)/_app/reporting/'
      path: '/reporting'
      fullPath: '/reporting'
      preLoaderRoute: typeof protectedAppReportingIndexImport
      parentRoute: typeof protectedAppImport
    }
    '/(protected)/_app/transactions/': {
      id: '/(protected)/_app/transactions/'
      path: '/transactions'
      fullPath: '/transactions'
      preLoaderRoute: typeof protectedAppTransactionsIndexImport
      parentRoute: typeof protectedAppImport
    }
    '/(protected)/_app/budgeting/$budgetId/categories': {
      id: '/(protected)/_app/budgeting/$budgetId/categories'
      path: '/budgeting/$budgetId/categories'
      fullPath: '/budgeting/$budgetId/categories'
      preLoaderRoute: typeof protectedAppBudgetingBudgetIdCategoriesImport
      parentRoute: typeof protectedAppImport
    }
    '/(protected)/_app/budgeting/$budgetId/edit': {
      id: '/(protected)/_app/budgeting/$budgetId/edit'
      path: '/budgeting/$budgetId/edit'
      fullPath: '/budgeting/$budgetId/edit'
      preLoaderRoute: typeof protectedAppBudgetingBudgetIdEditImport
      parentRoute: typeof protectedAppImport
    }
    '/(protected)/_app/transactions/$transactionId/edit': {
      id: '/(protected)/_app/transactions/$transactionId/edit'
      path: '/transactions/$transactionId/edit'
      fullPath: '/transactions/$transactionId/edit'
      preLoaderRoute: typeof protectedAppTransactionsTransactionIdEditImport
      parentRoute: typeof protectedAppImport
    }
    '/(protected)/_app/budgeting/$budgetId/': {
      id: '/(protected)/_app/budgeting/$budgetId/'
      path: '/budgeting/$budgetId'
      fullPath: '/budgeting/$budgetId'
      preLoaderRoute: typeof protectedAppBudgetingBudgetIdIndexImport
      parentRoute: typeof protectedAppImport
    }
  }
}

// Create and export the route tree

interface protectedAppRouteChildren {
  protectedAppBudgetingNewRoute: typeof protectedAppBudgetingNewRoute
  protectedAppReportingManageRoute: typeof protectedAppReportingManageRoute
  protectedAppReportingNewRoute: typeof protectedAppReportingNewRoute
  protectedAppTransactionsNewRoute: typeof protectedAppTransactionsNewRoute
  protectedAppBudgetingIndexRoute: typeof protectedAppBudgetingIndexRoute
  protectedAppDashboardIndexRoute: typeof protectedAppDashboardIndexRoute
  protectedAppProfileIndexRoute: typeof protectedAppProfileIndexRoute
  protectedAppReportingIndexRoute: typeof protectedAppReportingIndexRoute
  protectedAppTransactionsIndexRoute: typeof protectedAppTransactionsIndexRoute
  protectedAppBudgetingBudgetIdCategoriesRoute: typeof protectedAppBudgetingBudgetIdCategoriesRoute
  protectedAppBudgetingBudgetIdEditRoute: typeof protectedAppBudgetingBudgetIdEditRoute
  protectedAppTransactionsTransactionIdEditRoute: typeof protectedAppTransactionsTransactionIdEditRoute
  protectedAppBudgetingBudgetIdIndexRoute: typeof protectedAppBudgetingBudgetIdIndexRoute
}

const protectedAppRouteChildren: protectedAppRouteChildren = {
  protectedAppBudgetingNewRoute: protectedAppBudgetingNewRoute,
  protectedAppReportingManageRoute: protectedAppReportingManageRoute,
  protectedAppReportingNewRoute: protectedAppReportingNewRoute,
  protectedAppTransactionsNewRoute: protectedAppTransactionsNewRoute,
  protectedAppBudgetingIndexRoute: protectedAppBudgetingIndexRoute,
  protectedAppDashboardIndexRoute: protectedAppDashboardIndexRoute,
  protectedAppProfileIndexRoute: protectedAppProfileIndexRoute,
  protectedAppReportingIndexRoute: protectedAppReportingIndexRoute,
  protectedAppTransactionsIndexRoute: protectedAppTransactionsIndexRoute,
  protectedAppBudgetingBudgetIdCategoriesRoute:
    protectedAppBudgetingBudgetIdCategoriesRoute,
  protectedAppBudgetingBudgetIdEditRoute:
    protectedAppBudgetingBudgetIdEditRoute,
  protectedAppTransactionsTransactionIdEditRoute:
    protectedAppTransactionsTransactionIdEditRoute,
  protectedAppBudgetingBudgetIdIndexRoute:
    protectedAppBudgetingBudgetIdIndexRoute,
}

const protectedAppRouteWithChildren = protectedAppRoute._addFileChildren(
  protectedAppRouteChildren,
)

interface protectedRouteChildren {
  protectedAppRoute: typeof protectedAppRouteWithChildren
}

const protectedRouteChildren: protectedRouteChildren = {
  protectedAppRoute: protectedAppRouteWithChildren,
}

const protectedRouteWithChildren = protectedRoute._addFileChildren(
  protectedRouteChildren,
)

export interface FileRoutesByFullPath {
  '/': typeof protectedAppRouteWithChildren
  '/auth': typeof AuthIndexRoute
  '/budgeting/new': typeof protectedAppBudgetingNewRoute
  '/reporting/manage': typeof protectedAppReportingManageRoute
  '/reporting/new': typeof protectedAppReportingNewRoute
  '/transactions/new': typeof protectedAppTransactionsNewRoute
  '/budgeting': typeof protectedAppBudgetingIndexRoute
  '/dashboard': typeof protectedAppDashboardIndexRoute
  '/profile': typeof protectedAppProfileIndexRoute
  '/reporting': typeof protectedAppReportingIndexRoute
  '/transactions': typeof protectedAppTransactionsIndexRoute
  '/budgeting/$budgetId/categories': typeof protectedAppBudgetingBudgetIdCategoriesRoute
  '/budgeting/$budgetId/edit': typeof protectedAppBudgetingBudgetIdEditRoute
  '/transactions/$transactionId/edit': typeof protectedAppTransactionsTransactionIdEditRoute
  '/budgeting/$budgetId': typeof protectedAppBudgetingBudgetIdIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof protectedAppRouteWithChildren
  '/auth': typeof AuthIndexRoute
  '/budgeting/new': typeof protectedAppBudgetingNewRoute
  '/reporting/manage': typeof protectedAppReportingManageRoute
  '/reporting/new': typeof protectedAppReportingNewRoute
  '/transactions/new': typeof protectedAppTransactionsNewRoute
  '/budgeting': typeof protectedAppBudgetingIndexRoute
  '/dashboard': typeof protectedAppDashboardIndexRoute
  '/profile': typeof protectedAppProfileIndexRoute
  '/reporting': typeof protectedAppReportingIndexRoute
  '/transactions': typeof protectedAppTransactionsIndexRoute
  '/budgeting/$budgetId/categories': typeof protectedAppBudgetingBudgetIdCategoriesRoute
  '/budgeting/$budgetId/edit': typeof protectedAppBudgetingBudgetIdEditRoute
  '/transactions/$transactionId/edit': typeof protectedAppTransactionsTransactionIdEditRoute
  '/budgeting/$budgetId': typeof protectedAppBudgetingBudgetIdIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/(protected)': typeof protectedRouteWithChildren
  '/(protected)/_app': typeof protectedAppRouteWithChildren
  '/auth/': typeof AuthIndexRoute
  '/(protected)/_app/budgeting/new': typeof protectedAppBudgetingNewRoute
  '/(protected)/_app/reporting/manage': typeof protectedAppReportingManageRoute
  '/(protected)/_app/reporting/new': typeof protectedAppReportingNewRoute
  '/(protected)/_app/transactions/new': typeof protectedAppTransactionsNewRoute
  '/(protected)/_app/budgeting/': typeof protectedAppBudgetingIndexRoute
  '/(protected)/_app/dashboard/': typeof protectedAppDashboardIndexRoute
  '/(protected)/_app/profile/': typeof protectedAppProfileIndexRoute
  '/(protected)/_app/reporting/': typeof protectedAppReportingIndexRoute
  '/(protected)/_app/transactions/': typeof protectedAppTransactionsIndexRoute
  '/(protected)/_app/budgeting/$budgetId/categories': typeof protectedAppBudgetingBudgetIdCategoriesRoute
  '/(protected)/_app/budgeting/$budgetId/edit': typeof protectedAppBudgetingBudgetIdEditRoute
  '/(protected)/_app/transactions/$transactionId/edit': typeof protectedAppTransactionsTransactionIdEditRoute
  '/(protected)/_app/budgeting/$budgetId/': typeof protectedAppBudgetingBudgetIdIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/auth'
    | '/budgeting/new'
    | '/reporting/manage'
    | '/reporting/new'
    | '/transactions/new'
    | '/budgeting'
    | '/dashboard'
    | '/profile'
    | '/reporting'
    | '/transactions'
    | '/budgeting/$budgetId/categories'
    | '/budgeting/$budgetId/edit'
    | '/transactions/$transactionId/edit'
    | '/budgeting/$budgetId'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/auth'
    | '/budgeting/new'
    | '/reporting/manage'
    | '/reporting/new'
    | '/transactions/new'
    | '/budgeting'
    | '/dashboard'
    | '/profile'
    | '/reporting'
    | '/transactions'
    | '/budgeting/$budgetId/categories'
    | '/budgeting/$budgetId/edit'
    | '/transactions/$transactionId/edit'
    | '/budgeting/$budgetId'
  id:
    | '__root__'
    | '/(protected)'
    | '/(protected)/_app'
    | '/auth/'
    | '/(protected)/_app/budgeting/new'
    | '/(protected)/_app/reporting/manage'
    | '/(protected)/_app/reporting/new'
    | '/(protected)/_app/transactions/new'
    | '/(protected)/_app/budgeting/'
    | '/(protected)/_app/dashboard/'
    | '/(protected)/_app/profile/'
    | '/(protected)/_app/reporting/'
    | '/(protected)/_app/transactions/'
    | '/(protected)/_app/budgeting/$budgetId/categories'
    | '/(protected)/_app/budgeting/$budgetId/edit'
    | '/(protected)/_app/transactions/$transactionId/edit'
    | '/(protected)/_app/budgeting/$budgetId/'
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
        "/(protected)/_app"
      ]
    },
    "/(protected)/_app": {
      "filePath": "(protected)/_app.tsx",
      "parent": "/(protected)",
      "children": [
        "/(protected)/_app/budgeting/new",
        "/(protected)/_app/reporting/manage",
        "/(protected)/_app/reporting/new",
        "/(protected)/_app/transactions/new",
        "/(protected)/_app/budgeting/",
        "/(protected)/_app/dashboard/",
        "/(protected)/_app/profile/",
        "/(protected)/_app/reporting/",
        "/(protected)/_app/transactions/",
        "/(protected)/_app/budgeting/$budgetId/categories",
        "/(protected)/_app/budgeting/$budgetId/edit",
        "/(protected)/_app/transactions/$transactionId/edit",
        "/(protected)/_app/budgeting/$budgetId/"
      ]
    },
    "/auth/": {
      "filePath": "auth/index.tsx"
    },
    "/(protected)/_app/budgeting/new": {
      "filePath": "(protected)/_app/budgeting/new.tsx",
      "parent": "/(protected)/_app"
    },
    "/(protected)/_app/reporting/manage": {
      "filePath": "(protected)/_app/reporting/manage.tsx",
      "parent": "/(protected)/_app"
    },
    "/(protected)/_app/reporting/new": {
      "filePath": "(protected)/_app/reporting/new.tsx",
      "parent": "/(protected)/_app"
    },
    "/(protected)/_app/transactions/new": {
      "filePath": "(protected)/_app/transactions/new.tsx",
      "parent": "/(protected)/_app"
    },
    "/(protected)/_app/budgeting/": {
      "filePath": "(protected)/_app/budgeting/index.tsx",
      "parent": "/(protected)/_app"
    },
    "/(protected)/_app/dashboard/": {
      "filePath": "(protected)/_app/dashboard/index.tsx",
      "parent": "/(protected)/_app"
    },
    "/(protected)/_app/profile/": {
      "filePath": "(protected)/_app/profile/index.ts",
      "parent": "/(protected)/_app"
    },
    "/(protected)/_app/reporting/": {
      "filePath": "(protected)/_app/reporting/index.tsx",
      "parent": "/(protected)/_app"
    },
    "/(protected)/_app/transactions/": {
      "filePath": "(protected)/_app/transactions/index.tsx",
      "parent": "/(protected)/_app"
    },
    "/(protected)/_app/budgeting/$budgetId/categories": {
      "filePath": "(protected)/_app/budgeting/$budgetId/categories.tsx",
      "parent": "/(protected)/_app"
    },
    "/(protected)/_app/budgeting/$budgetId/edit": {
      "filePath": "(protected)/_app/budgeting/$budgetId/edit.tsx",
      "parent": "/(protected)/_app"
    },
    "/(protected)/_app/transactions/$transactionId/edit": {
      "filePath": "(protected)/_app/transactions/$transactionId.edit.tsx",
      "parent": "/(protected)/_app"
    },
    "/(protected)/_app/budgeting/$budgetId/": {
      "filePath": "(protected)/_app/budgeting/$budgetId/index.tsx",
      "parent": "/(protected)/_app"
    }
  }
}
ROUTE_MANIFEST_END */
