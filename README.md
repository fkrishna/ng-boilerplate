# NgBoilerplate
An Angular boilerplate with Uikit front-end framework to start my projects faster

# Lazy Loading
The boilerplate is configured to use lazy-loading, which means the module isn’t loaded before the user actually accesses the route.

# Folder Structure
```
app.module.ts
app-routing.module.ts
app.component.ts|html|scss|spec
...
[-] modules
    [-] Home
        [+] components
        [-] pages
            home.component.ts|html|scss|spec
        home-routing.module.ts
        home.module.ts
    [-] Module2
        [+] components
        [+] pages
        module2.service.ts
        module2.routing.module.ts
        module2.module.ts
[-] shared
    [+] components
    [+] mocks
    [+] models
    [+] pipes
    shared.module.ts
    ...
```

# Shared Module
The SharedModule is where any shared components, pipes/filters and services should go. The SharedModule can be imported in any other module when those items will be re-used. The shared module shouldn’t have any dependency to the rest of the application and should therefore not rely on any other module.