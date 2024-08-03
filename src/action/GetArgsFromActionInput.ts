import { notFalse } from "+utilities/ArrayUtilities"
import { toStringArray } from "+utilities/StringUtilities"
import { getBooleanInput, getInput } from "@actions/core"

export function getArgsFromActionInput(): Array<string> {
	const checkSequentialRelease = getBooleanInput("check-sequential-release")
	const files = toStringArray(getInput("files"))
	const prereleaseFiles = toStringArray(getInput("prerelease-files"))
	const releaseFiles = toStringArray(getInput("release-files"))
	const releaseVersion = getInput("release-version")

	const args = [
		checkSequentialRelease && ["--check-sequential-release"],
		files.length > 0 && ["--files", ...files],
		prereleaseFiles.length > 0 && ["--prerelease-files", ...prereleaseFiles],
		releaseFiles.length > 0 && ["--release-files", ...releaseFiles],
		releaseVersion !== null && ["--release-version", releaseVersion],
	]

	return args.filter(notFalse).flat()
}
