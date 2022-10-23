---
title: 'Directive Composition API in Angular 15'
description: 'An simplified reusable takeUntil() with new directive composition api'
coverImage: '/posts/directive-composition.png'
tags: 'Angular'
date: '2022-10-24T12:30:07.322Z'
updateDate: '2022-10-24T12:30:07.322Z'
author: Jerry Gagliano
picture: ''
path: '/posts/angular-directive-takeuntil'
---

Angular version 15 is around the corner, we begin seeing new exciting features. One new feature which I will discuss is the directive composition api and how to use it.

This feature allows you to create a standalone directive without the need to be rendered in the template. This allows develoeprs to use directives directly in the component typescript file. Lots of developers were demanding this feature which I had no idea. Here is an article for more details [Directive composition API](https://www.angularjswiki.com/angular/directive-composition-api-in-angular-15/#real-use-cases)

What caught my eye about this feature is using the takeUntil pattern with a directive. Those of you who don't know about this particular pattern, it's basically using a Subject observable. When the component is destroyed, the observable is emitted and unsubscribes the observable. This is a common pattern used in Angular app development but not in a well-structured way.

Here is an example without the directive composition API:

```js
@Component()
export class YourComponentName implements OnDestroy {
  private destroy$ = new Subject<void>();

  constructor() {
    AnyObservable$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((params) => {
      ...your code here
    });
  }

  ngOnDestory() {
    this.destroy$.next();
  }
}
```


As we see, the observable will unsubscribe once the component is destroyed and will emit the Subject observable. Just image we have hundreds of components that implement this specific pattern. Lots of repeated code which is not ideal!

Here is an example of using directive composition API composing with a directive:

```js
@Directive({ standalone: true }) // standalone is needed
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

Here we import the directive using the hostDirectives property

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

Much cleaner and if we needed to modify the takeUntil operator we would have one common file. One argument we might have, directives are UI based elements only. This is true, but you're still actually managing functionality in the component UI.

The other argument is why not just use a service? I don't use services much. Services are used mainly to create methods containing endpoint calls or having no UI component interaction. If you use a state management library like NGXS, services are much less needed.

## Final Thoughts

Here it is! A quick example of how to structure your takeUntil's using the new directive composition API. This is just one idea and I am sure so many other developers will use this feature in different ways. If other developers have other ideas, please email me with examples as I am curious to expand my knowledge about this topic.

Cheers!




