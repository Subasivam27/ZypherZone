//#region node_modules/.nitro/vite/services/ssr/assets/__23tanstack-start-server-fn-resolver-DQPj00bq.js
var manifest = {
	"46a2212da14fbf1ceb1569169717abed2822d1625cf09964634b54f486d22145": {
		functionName: "saveEnquiry_createServerFn_handler",
		importer: () => import("./_ssr/mongodb-9P-tGDgU.mjs")
	},
	"ff9939fa6990a5d916c1383c46424be767f842371fe57ce70d1fb456ceb18d86": {
		functionName: "saveHelpRequest_createServerFn_handler",
		importer: () => import("./_ssr/mongodb-9P-tGDgU.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
//#endregion
export { getServerFnById as t };
