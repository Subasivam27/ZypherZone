import { t as getServerFnById } from "../__23tanstack-start-server-fn-resolver-DQPj00bq.mjs";
import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mongodb-exFH-zlx.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var saveEnquiry = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("46a2212da14fbf1ceb1569169717abed2822d1625cf09964634b54f486d22145"));
var saveHelpRequest = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("ff9939fa6990a5d916c1383c46424be767f842371fe57ce70d1fb456ceb18d86"));
//#endregion
export { saveHelpRequest as n, saveEnquiry as t };
