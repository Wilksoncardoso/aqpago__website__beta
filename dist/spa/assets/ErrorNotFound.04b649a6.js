import { d as t } from "./QBtn.8422aec2.js";
import {
  _ as o,
  G as s,
  I as r,
  R as n,
  Q as e,
  L as a,
} from "./index.75116554.js";
import "./render.1e25153e.js";
const c = s({ name: "ErrorNotFound" }),
  l = {
    class: "fullscreen bg-blue text-white text-center q-pa-md flex flex-center",
  },
  d = e("div", { style: { "font-size": "30vh" } }, " 404 ", -1),
  i = e(
    "div",
    { class: "text-h2", style: { opacity: ".4" } },
    " Oops. Nothing here... ",
    -1
  );
function p(_, f, m, u, h, x) {
  return (
    r(),
    n("div", l, [
      e("div", null, [
        d,
        i,
        a(t, {
          class: "q-mt-xl",
          color: "white",
          "text-color": "blue",
          unelevated: "",
          to: "/",
          label: "Go Home",
          "no-caps": "",
        }),
      ]),
    ])
  );
}
var B = o(c, [["render", p]]);
export { B as default };
