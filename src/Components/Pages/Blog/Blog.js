import React from 'react';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Blog = () => {
  return (
    <div className="w-full px-4 pt-16 min-h-[70vh] bg-primary text-accent">
      <div className="mx-auto w-1/2  rounded-2xl bg-secondary text-accent p-8">
        <h3 className='my-6 text-4xl font-bold'>Important Questions</h3>
        <div className="">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    1. What are the different ways to manage a state in a React
                    application?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-start  text-accent">
                  <strong>5 Diffrent state management in React</strong>
                  <p>1 . Communication State</p>
                  <p>2. Data State</p>
                  <p>3. Control State</p>
                  <p>4. Session State</p>
                  <p>5. Location State</p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mt-6">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>2. How does prototypical inheritance work?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-start text-sm text-accent">
                  Every object with its methods and properties contains an
                  internal and hidden property known as [[Prototype]]. The
                  Prototypal Inheritance is a feature in javascript used to add
                  methods and properties in objects. It is a method by which an
                  object can inherit the properties and methods of another
                  object. Traditionally, in order to get and set the
                  [[Prototype]] of an object, we use Object.getPrototypeOf and
                  Object.setPrototypeOf. Nowadays, in modern language,
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mt-6">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>
                    3. What is a unit test? Why should we write unit tests?
                  </span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-start text-sm text-accent">
                  The main objective of unit testing is to isolate written code
                  to test and determine if it works as intended. Unit testing is
                  an important step in the development process, because if done
                  correctly, it can help detect early flaws in code which may be
                  more difficult to find in later testing stages.
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
        <div className="mt-6">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                  <span>4. React vs. Angular vs. Vue?</span>
                  <ChevronUpIcon
                    className={`${
                      open ? "rotate-180 transform" : ""
                    } h-5 w-5 text-purple-500`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-start text-sm text-accent">
                  <strong>1. Angular VS React</strong>
                  <p>
                    If the choice you’re making is based on Angular vs React
                    alone, then you’ll simply need to consider the pros and cons
                    discussed for those libraries in this post. But overall,
                    keep in mind that both libraries can be used for mobile and
                    web apps, while Angular is generally better for more complex
                    apps that are enterprise-ready. React often requires extra
                    modules and components, which keeps the core library small,
                    but means there’s extra work involved when incorporating
                    outside tools. Angular, on the other hand, is more of a
                    full-fledged solution that doesn’t require extras like React
                    often does, though it does have a steeper learning curve for
                    its core compared to React. React is more suitable for
                    intermediate to advanced JavaScript developers who are
                    familiar with concepts from ES6 and up, while Angular favors
                    those same developers who are also familiar with TypeScript.
                  </p>
                  <div className="font-bold mt-6">2. React VS Vue</div>
                  <p>
                    The choice between React vs Vue is often debated and it’s
                    not an easy one. Vue has a vibrant and ever-growing
                    community and has taken over popularity vs. React in many
                    respects. React developers are still churning out lots of
                    new components and extras, so there’s no sign that React is
                    on the decline either. Vue is generally more suited to
                    smaller, less complex apps and is easier to learn from
                    scratch compared to React. Vue can be easier to integrate
                    into new or existing projects and many feel its use of HTML
                    templates along with JSX is an advantage. Overall, Vue might
                    be the best choice if you’re a newer developer and not as
                    familiar with advanced JavaScript concepts, while React is
                    quite well suited for experienced programmers and developers
                    who have worked with object-oriented JavaScript, functional
                    JavaScript, and similar concepts.
                  </p>
                  <div className="font-bold mt-6">3. Angular VS Vue</div>
                  <p>
                    In most cases, you probably wouldn’t be deciding between
                    only Angular and Vue. They are vastly different libraries
                    with very different feature sets and learning curves. Vue is
                    the clear choice for less experienced developers, and
                    Angular would be preferred for those working on larger apps.
                    A large library like Angular would require more diligence in
                    keeping up with what’s new, while Vue would be less
                    demanding in this regard and the fact that the two most
                    recent major releases of Vue are in separate repositories
                    helps. It should also be noted that Vue was created by a
                    developer who formerly worked on Angular for Google, so
                    that’s another thing to keep in mind, though that wouldn’t
                    have a huge impact on your decision.
                  </p>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
        
    </div>
  );
}

export default Blog;