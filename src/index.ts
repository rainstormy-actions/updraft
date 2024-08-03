import { getArgsFromActionInput } from "+action/GetArgsFromActionInput"
import { updraftProgram } from "@rainstormy/updraft"

updraftProgram(getArgsFromActionInput()).then(process.exit)
