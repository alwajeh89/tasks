
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-family-heading": `ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "24px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #36cea8 
		"--color-primary-50": "225 248 242", // #e1f8f2
		"--color-primary-100": "215 245 238", // #d7f5ee
		"--color-primary-200": "205 243 233", // #cdf3e9
		"--color-primary-300": "175 235 220", // #afebdc
		"--color-primary-400": "114 221 194", // #72ddc2
		"--color-primary-500": "54 206 168", // #36cea8
		"--color-primary-600": "49 185 151", // #31b997
		"--color-primary-700": "41 155 126", // #299b7e
		"--color-primary-800": "32 124 101", // #207c65
		"--color-primary-900": "26 101 82", // #1a6552
		// secondary | #2d8f8e 
		"--color-secondary-50": "224 238 238", // #e0eeee
		"--color-secondary-100": "213 233 232", // #d5e9e8
		"--color-secondary-200": "203 227 227", // #cbe3e3
		"--color-secondary-300": "171 210 210", // #abd2d2
		"--color-secondary-400": "108 177 176", // #6cb1b0
		"--color-secondary-500": "45 143 142", // #2d8f8e
		"--color-secondary-600": "41 129 128", // #298180
		"--color-secondary-700": "34 107 107", // #226b6b
		"--color-secondary-800": "27 86 85", // #1b5655
		"--color-secondary-900": "22 70 70", // #164646
		// tertiary | #ffffff 
		"--color-tertiary-50": "255 255 255", // #ffffff
		"--color-tertiary-100": "255 255 255", // #ffffff
		"--color-tertiary-200": "255 255 255", // #ffffff
		"--color-tertiary-300": "255 255 255", // #ffffff
		"--color-tertiary-400": "255 255 255", // #ffffff
		"--color-tertiary-500": "255 255 255", // #ffffff
		"--color-tertiary-600": "230 230 230", // #e6e6e6
		"--color-tertiary-700": "191 191 191", // #bfbfbf
		"--color-tertiary-800": "153 153 153", // #999999
		"--color-tertiary-900": "125 125 125", // #7d7d7d
		// success | #95b7d0 
		"--color-success-50": "239 244 248", // #eff4f8
		"--color-success-100": "234 241 246", // #eaf1f6
		"--color-success-200": "229 237 243", // #e5edf3
		"--color-success-300": "213 226 236", // #d5e2ec
		"--color-success-400": "181 205 222", // #b5cdde
		"--color-success-500": "149 183 208", // #95b7d0
		"--color-success-600": "134 165 187", // #86a5bb
		"--color-success-700": "112 137 156", // #70899c
		"--color-success-800": "89 110 125", // #596e7d
		"--color-success-900": "73 90 102", // #495a66
		// warning | #dd7a08 
		"--color-warning-50": "250 235 218", // #faebda
		"--color-warning-100": "248 228 206", // #f8e4ce
		"--color-warning-200": "247 222 193", // #f7dec1
		"--color-warning-300": "241 202 156", // #f1ca9c
		"--color-warning-400": "231 162 82", // #e7a252
		"--color-warning-500": "221 122 8", // #dd7a08
		"--color-warning-600": "199 110 7", // #c76e07
		"--color-warning-700": "166 92 6", // #a65c06
		"--color-warning-800": "133 73 5", // #854905
		"--color-warning-900": "108 60 4", // #6c3c04
		// error | #eb0000 
		"--color-error-50": "252 217 217", // #fcd9d9
		"--color-error-100": "251 204 204", // #fbcccc
		"--color-error-200": "250 191 191", // #fabfbf
		"--color-error-300": "247 153 153", // #f79999
		"--color-error-400": "241 77 77", // #f14d4d
		"--color-error-500": "235 0 0", // #eb0000
		"--color-error-600": "212 0 0", // #d40000
		"--color-error-700": "176 0 0", // #b00000
		"--color-error-800": "141 0 0", // #8d0000
		"--color-error-900": "115 0 0", // #730000
		// surface | #05121a 
		"--color-surface-50": "218 219 221", // #dadbdd
		"--color-surface-100": "205 208 209", // #cdd0d1
		"--color-surface-200": "193 196 198", // #c1c4c6
		"--color-surface-300": "155 160 163", // #9ba0a3
		"--color-surface-400": "80 89 95", // #50595f
		"--color-surface-500": "5 18 26", // #05121a
		"--color-surface-600": "5 16 23", // #051017
		"--color-surface-700": "4 14 20", // #040e14
		"--color-surface-800": "3 11 16", // #030b10
		"--color-surface-900": "2 9 13", // #02090d
		
	}
}