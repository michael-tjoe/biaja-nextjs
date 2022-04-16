# Features

## Server Side Rendering

The purpose of SSR in this project to get a better LCP time.
There is no request to randomuser API when the page is loaded for the first time, we get data on the first page
with default filter on the server side.

## Debounce

Page control (filter, search, sortBy, sortOrder) is combined and stored as an object, the object is debounced for 500ms
so typing search keyword or rapidly changing the filter wont rapidly hit API.

## Memoized components

These components in this project are handmade and using `React.memo` to demonstrate the benefit of using `useReducer` hooks.
We can pass `Dispatch` function to any child component and the result is any components that have been memoized wont rerender since we can use `useCallback` hooks to any function that will be passed to the components and set only `Dispatch` as a dependency ex:
when we type on the search box, `Select Component` , `Users Table Component`, `Button` wont rerender.

# Logic and Behavior

## Search Keyword

When a new value is typed on the `Search Component` it will set the current page to `1` (first page)
and hit the API with existing `sortBy`,`sortOrder`, and `filter gender`

## Changing Gender Filter

When a new filter value is selected on the `Select Component` it will set the current page to `1` (first page)
and hit the API with existing `sortBy`,`sortOrder`and `keyword`,

## Changing SortOrder, SortBy

When selected table header is clicked for the first time it will set `SortBy` value to the selected header and set `SortOrder` to `Ascending` mode, when clicked the same header again (second times) it will set `SortOrder` to `Descending` mode, when clicked again (third times) it will remove `SortBy` and `SortOrder` value. Changing `SortBy` or `SortOrder` will set the page to `1` (first page) and hit the API with existing `filter` and `keyword`,

## Changing Total Result Data and Pagesize
You can set page size and total data on `@constants/api.ts`. Ex: Changing page size to 5, and setting total data to 11 will display
3 pagination link, first link will display 5 items, second link will display 5 items, and last link will display 1 item.


# Folder Structures

## @Components
List of micro components / design system that used on this project, these components styling is inspired from antd design system.

## @Constants
Contain some configuration for API, Table columns, Filter options

## @Context
For now only contain UsersContext and UsersContext.Provider, the main logic for debounce and calling the API is located
in this folder (`usersContext` file)

## @Hooks
Contain some utility hooks like debounce, click outside

## @Pages
Contain components that will be used for nextjs page, the main logic for the project is in this folder (`Container.tsx`)

## @Styles
- Contain colors token
- Contain global styles
- Containe basic typography styles

## @Utils
Contain utility function

# Try Demo
https://biaja-nextjs.vercel.app/
