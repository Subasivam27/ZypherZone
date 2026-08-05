import { c as createServerFn, i as TSS_SERVER_FUNCTION } from "./createServerFn-CIHAFgYl.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mongodb-9P-tGDgU.js
var createServerRpc = (serverFnMeta, splitImportFn) => {
	const url = "/_serverFn/" + serverFnMeta.id;
	return Object.assign(splitImportFn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var saveEnquiry_createServerFn_handler = createServerRpc({
	id: "46a2212da14fbf1ceb1569169717abed2822d1625cf09964634b54f486d22145",
	name: "saveEnquiry",
	filename: "src/lib/mongodb.ts"
}, (opts) => saveEnquiry.__executeServer(opts));
var saveEnquiry = createServerFn({ method: "POST" }).validator((data) => data).handler(saveEnquiry_createServerFn_handler, async ({ data }) => {
	const { saveEnquiryToServer } = await import("./mongodb.server-oweEduyY.mjs");
	return saveEnquiryToServer(data);
});
var saveHelpRequest_createServerFn_handler = createServerRpc({
	id: "ff9939fa6990a5d916c1383c46424be767f842371fe57ce70d1fb456ceb18d86",
	name: "saveHelpRequest",
	filename: "src/lib/mongodb.ts"
}, (opts) => saveHelpRequest.__executeServer(opts));
var saveHelpRequest = createServerFn({ method: "POST" }).validator((data) => data).handler(saveHelpRequest_createServerFn_handler, async ({ data }) => {
	const { saveHelpRequestToServer } = await import("./mongodb.server-oweEduyY.mjs");
	return saveHelpRequestToServer(data);
});
//#endregion
export { saveEnquiry_createServerFn_handler, saveHelpRequest_createServerFn_handler };
