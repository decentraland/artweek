declare interface JQuery {}

declare namespace SegmentAnalytics {
  // Generic options object with integrations
  interface SegmentOpts {
    integrations?: unknown
    anonymousId?: string | undefined
    context?: object | undefined
  }

  interface CookieOptions {
    maxage?: number | undefined
    domain?: string | undefined
    path?: string | undefined
    secure?: boolean | undefined
  }

  interface MetricsOptions {
    host?: string | undefined
    sampleRate?: number | undefined
    flushTimer?: number | undefined
    maxQueueSize?: number | undefined
  }

  interface StoreOptions {
    enabled?: boolean | undefined
  }

  interface UserOptions {
    cookie?:
      | {
          key: string
          oldKey: string
        }
      | undefined
    localStorage?:
      | {
          key: string
        }
      | undefined
    persist?: boolean | undefined
  }

  interface GroupOptions {
    cookie?:
      | {
          key: string
        }
      | undefined
    localStorage?:
      | {
          key: string
        }
      | undefined
    persist?: boolean | undefined
  }

  interface InitOptions {
    cookie?: CookieOptions | undefined
    metrics?: MetricsOptions | undefined
    localStorage?: StoreOptions | undefined
    user?: UserOptions | undefined
    group?: GroupOptions | undefined
    integrations?:
      | {
          All?: boolean | undefined
          [integration: string]: boolean | undefined
        }
      | undefined
  }

  interface IntegrationsSettings {
    [key: string]: unknown
  }

  // The actual analytics.js object
  interface AnalyticsJS {
    /* Use a plugin */
    use(plugin: (analytics: AnalyticsJS) => void): this

    /* Initialize with the given integration `settings` and `options`. */
    init(settings?: IntegrationsSettings, options?: InitOptions): this

    /* Define a new integration */
    addIntegration(integration: (options: unknown) => void): this

    /*  Set the user's `id`. */
    setAnonymousId(id: string): this

    /* Configure Segment with write key */
    load(writeKey: string): void

    /* Configure Segment with write key & integration management.

       The load method can also be modified to take a second argument,
       an object with an integrations dictionary, which used to load
       only the integrations that are marked as enabled with the boolean value true.
       works in version 4.1.0 or higher */
    load(writeKey: string, options?: SegmentOpts): void

    /* The identify method is how you tie one of your users and their actions
       to a recognizable userId and traits. */
    identify(
      userId: string,
      traits?: object,
      options?: SegmentOpts,
      callback?: () => void
    ): void
    identify(userId: string, traits: object, callback?: () => void): void
    identify(userId: string, callback?: () => void): void
    identify(
      traits?: object,
      options?: SegmentOpts,
      callback?: () => void
    ): void
    identify(traits?: object, callback?: () => void): void
    identify(callback: () => void): void

    /* The track method lets you record any actions your users perform. */
    track(
      event: string,
      properties?: object,
      options?: SegmentOpts,
      callback?: () => void
    ): void
    track(event: string, properties?: object, callback?: () => void): void
    track(event: string, callback?: () => void): void

    /* The page method lets you record page views on your website, along with
       optional extra information about the page being viewed. */
    page(
      category?: string,
      name?: string,
      properties?: object,
      options?: SegmentOpts,
      callback?: () => void
    ): void
    page(
      name?: string,
      properties?: object,
      options?: SegmentOpts,
      callback?: () => void
    ): void
    page(name?: string, properties?: object, callback?: () => void): void
    page(name?: string, callback?: () => void): void
    page(
      properties?: object,
      options?: SegmentOpts,
      callback?: () => void
    ): void
    page(callback?: () => void): void

    /* The group method associates an individual user with a group. The group
       can a company, organization, account, project, team or any other name
       you came up with for the same concept. */
    group(
      groupId: string,
      traits?: object,
      options?: SegmentOpts,
      callback?: () => void
    ): void
    group(groupId: string, traits?: object, callback?: () => void): void
    group(groupId: string, callback?: () => void): void

    /* The alias method combines two previously unassociated user identities.
       This comes in handy if the same user visits from two different devices
       and you want to combine their history.

       Some providers also don't alias automatically for you when an anonymous
       user signs up (like Mixpanel), so you need to call alias manually right
       after sign up with their brand new userId. */
    alias(
      userId: string,
      previousId?: string,
      options?: SegmentOpts,
      callback?: () => void
    ): void
    alias(userId: string, previousId?: string, callback?: () => void): void
    alias(userId: string, callback?: () => void): void
    alias(userId: string, options?: SegmentOpts, callback?: () => void): void

    /* trackLink is a helper that binds a track call to whenever a link is
       clicked. Usually the page would change before you could call track, but
       with trackLink a small timeout is inserted to give the track call enough
       time to fire. */
    trackLink(
      elements: JQuery | Element[] | Element,
      event: string | { (elm: Element): string },
      properties?: object | { (elm: Element): object }
    ): void

    /* trackForm is a helper that binds a track call to a form submission.
       Usually the page would change before you could call track, but with
       trackForm a small timeout is inserted to give the track call enough
       time to fire. */
    trackForm(
      elements: JQuery | Element[] | Element,
      event: string | { (elm: Element): string },
      properties?: object | { (elm: Element): object }
    ): void

    /* The ready method allows you to pass in a callback that will be called as
       soon as all of your enabled integrations have loaded. It's like jQuery's
       ready method, except for integrations. */
    ready(callback: () => void): void

    /* If you need to clear the user and group id and traits we've added a
       reset function that is most commonly used when your identified users
       logout of your application. */
    reset(): void

    /* Once Analytics.js loaded, you can retrieve information about the
       currently identified user or group like their id and traits. */
    user(): {
      id(newId?: string | null): string | null | undefined
      logout(): void
      reset(): void
      anonymousId(newId?: string): string
      traits(newTraits?: object): void
    }

    group(): {
      id(): string
      traits(newTraits?: object): void
    }

    /* Analytics.js has a debug mode that logs helpful messages to the
       console. */
    debug(state?: boolean): void

    /* The global analytics object emits events whenever you call alias, group,
       identify, track or page. That way you can listen to those events and run
       your own custom code. */
    on(
      event: string,
      callback: {
        (event: string, properties: object, options: SegmentOpts): void
      }
    ): void

    /* You can extend the length (in milliseconds) of the method callbacks and
       helpers */
    timeout(milliseconds: number): void
  }
}

declare const analytics: SegmentAnalytics.AnalyticsJS

declare module "@segment/analytics.js-core" {
  const analytics: SegmentAnalytics.AnalyticsJS
  export { analytics }
}
