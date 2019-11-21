const codeStatus = require("../constants/status-code");

const {STATUS_CODE_NOT_FOUND} = codeStatus;

function formatErrorMessage(status, resource, id) {
	switch (status) {
		case STATUS_CODE_NOT_FOUND:
			return `El recurso ${resource} con id ${id} no existe.`;
	}
}

module.exports = {
	handleError(result, resource, id) {
		return {
			originalError: result,
			error: `${result.error} (${result.status})`,
			message: formatErrorMessage(result.status, resource, id)
		}
	}
};