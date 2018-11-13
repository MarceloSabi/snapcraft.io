import metrics from "./metrics/metrics";
import { selector } from "./metrics/filters";
import * as market from "./form";
import { initMultiselect } from "./form/multiselect";
import { enableInput, changeHandler } from "./settings";
import { publicise } from "./publicise";

const settings = { enableInput, changeHandler };

export { metrics, selector, market, initMultiselect, settings, publicise };
