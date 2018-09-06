# One Framework - Two State Management Libraries 

Here we have two Angular apps that are - from the end user's presepective - identical in every way. 

But from the developer's prespective there is a world of difference. I'm not taking sides here - just want to give you a balanced side-by-side comparison of NGXS and NgRx. 

Watch the [video and read the article](https://angularfirebase.com/lessons/ngxs-quick-start-angular-state-management). 

## Usage

```
cd ngxs && npm i
cd ngrx && npm i
```

How do I compare the code footprint between projects? Here's a simple formula:

`( {NgRx}.reducer.ts +  {NgRx}.effects.ts ) ≈ {NGXS}.state.ts`

Both projects have action classes defined in *.actions.ts files

Also, take a look at `salad-page.component.ts` to compare state *selectors* between libraries.

## Benchmarks

Webpack bundle analyzer

```
cd ngxs && npm run analyzer
cd ngrx && npm run analyzer
```






