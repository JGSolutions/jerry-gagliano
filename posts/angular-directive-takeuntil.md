---
title: 'Simplified Reusable takeUntil() in Angular 15'
description: 'Simplified Reusable takeUntil() in Angular 15'
coverImage: '/posts/'
tags: 'Angular'
date: '2022-10-01T12:30:07.322Z'
updateDate: '2022-10-01T12:30:07.322Z'
author: Jerry Gagliano
picture: ''
path: '/posts/angular-directive-takeuntil'
---

As angular v15 is around the corner, we begin to see more exciting examples of new features in the radar. One of Angular's v15 main features are to simplify development by adding a new way to compose UI logic.

Here is one example I discovered using the takeUntil pattern with a directive. Those of you don't know about this particular pattern, it's basically using a Subject observable and on ngDestroy emitting the observable. I use this pattern during app development but not a in structured way.

Here is an example:

```
export class ComponentName implements OnDestroy {
  private destroy$ = new Subject<void>();

  constructor() {
    AnyObservable$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((params) => {
      ...will have code here
    });
  }

  ngOnDestory() {
    this.destroy$.next();
  }
}
```


As we see, the observable will stop once the component is destroyed which will emit the observable. Just image we have hundreds of components that implements this specific pattern. Not ideal!

Here is an example of with Angular new feature how we can compose this into a directive:

```
@Directive({ standalone: true })
export class DirectiveName implements OnDestroy {
  private destroy$ = new Subject<void>();

  get pipe() {
    return pipe(takeUntil(this.destroy$));
  }

  ngOnDestory() {
    this.destroy$.next();
  }
}
```

How to implemented in your component

```
@Component({
  hostDirectives: [DestroyedDirective]
})
export class ComponentName implements OnInit {
  private untilDestroyed = new inject(DestroyedDirective).pipe;

  constructor() {
    AnyObservable$.pipe(
      this.untilDestroyed
    ).subscribe(() => {
      ...will have code here
    });
  }
}
```

## Final Thoughts

Here it is! A quick example how to structure your takeUntil's in upcoming Angular 15. I am sure other developers have different opinions or other ways of going about this. 

One argument a dev can have, directive's are UI based elements only. Which is true but you are actually managing something on the UI. It's not visible to the user's eye,but it's organizing and managing the components.

Another argument why not use a service and feels hacky. Personally I use less services. Services are used mainly to create method endpoint calls with a state management library like NGXS. Services have no interaction with UI.
