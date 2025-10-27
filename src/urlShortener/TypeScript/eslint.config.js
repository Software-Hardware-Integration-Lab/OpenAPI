import { defineConfig, globalIgnores } from 'eslint/config'
import { eslintConfig } from '@shi-corp/development-utilities/optimized/lint/base.js'

export default defineConfig([
    ...eslintConfig,
    globalIgnores(['sdk/'])
])
