import { z } from 'zod'

const envVariables = z.object({
	NEXT_PUBLIC_BASE_URL: z.string().url(),
	NEXT_PUBLIC_API_URL: z.string().url()
})

const env = envVariables.safeParse(process.env)

if (!env.success) {
	missingEnvVariableError(env.error.errors)
}

type EnvVariables = z.infer<typeof envVariables>

declare global {
	namespace NodeJS {
		interface ProcessEnv extends EnvVariables {}
	}
}

function missingEnvVariableError(errors: z.ZodIssue[]) {
	console.log('===========================================')
	console.error('Missing Environment Variables:')
	for (const error of errors) {
		console.log(error.path[0])
	}
	console.log('===========================================')
}
