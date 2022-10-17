import { CompilerOptions, ParsedCommandLine } from 'typescript';
import { NewLineKind } from 'typescript/lib/tsserverlibrary';

export function extendCompilerOptions(compilerOptions: CompilerOptions)
{
	compilerOptions.newLine ??= NewLineKind.LineFeed;

	return compilerOptions
}

export function extendParsedCommandLineOfConfigFile(config: ParsedCommandLine)
{
	extendCompilerOptions(config.options);

	return config
}
