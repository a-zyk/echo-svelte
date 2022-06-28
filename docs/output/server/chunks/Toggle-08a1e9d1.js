import { n as noop, f as safe_not_equal, c as create_ssr_component, a as subscribe, h as set_store_value, d as add_attribute } from "./index-fe7fc8b7.js";
import { v4 } from "uuid";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const active = writable();
const Toggle = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $active, $$unsubscribe_active;
  $$unsubscribe_active = subscribe(active, (value) => $active = value);
  const id = v4();
  let { classes } = $$props;
  let { autoclosable = false } = $$props;
  let { initialState = false } = $$props;
  let show = initialState;
  if (initialState) {
    set_store_value(active, $active = id, $active);
  }
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.autoclosable === void 0 && $$bindings.autoclosable && autoclosable !== void 0)
    $$bindings.autoclosable(autoclosable);
  if ($$props.initialState === void 0 && $$bindings.initialState && initialState !== void 0)
    $$bindings.initialState(initialState);
  {
    {
      if (autoclosable) {
        show = $active == id;
      }
    }
  }
  $$unsubscribe_active();
  return `<div${add_attribute("class", classes, 0)}><div class="${"flex cursor-pointer text-xl font-bold mt-2 p-3"}">${slots.title ? slots.title({}) : ``}
		<div class="${"flex flex-grow"}"></div>
		<div class="${"text-4xl font-bold"}">${show ? `-` : `+`}</div></div>

	${show ? `<div class="${"p-5"}">${slots.content ? slots.content({}) : ``}</div>` : ``}</div>`;
});
export { Toggle as T, writable as w };
