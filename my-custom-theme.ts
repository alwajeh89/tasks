
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
		"--on-success": "255 255 255",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "0 0 0",
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
		// secondary | #10d110 
		"--color-secondary-50": "219 248 219", // #dbf8db
		"--color-secondary-100": "207 246 207", // #cff6cf
		"--color-secondary-200": "195 244 195", // #c3f4c3
		"--color-secondary-300": "159 237 159", // #9fed9f
		"--color-secondary-400": "88 223 88", // #58df58
		"--color-secondary-500": "16 209 16", // #10d110
		"--color-secondary-600": "14 188 14", // #0ebc0e
		"--color-secondary-700": "12 157 12", // #0c9d0c
		"--color-secondary-800": "10 125 10", // #0a7d0a
		"--color-secondary-900": "8 102 8", // #086608
		// tertiary | #7af661 
		"--color-tertiary-50": "235 254 231", // #ebfee7
		"--color-tertiary-100": "228 253 223", // #e4fddf
		"--color-tertiary-200": "222 253 216", // #defdd8
		"--color-tertiary-300": "202 251 192", // #cafbc0
		"--color-tertiary-400": "162 249 144", // #a2f990
		"--color-tertiary-500": "122 246 97", // #7af661
		"--color-tertiary-600": "110 221 87", // #6edd57
		"--color-tertiary-700": "92 185 73", // #5cb949
		"--color-tertiary-800": "73 148 58", // #49943a
		"--color-tertiary-900": "60 121 48", // #3c7930
		// success | #4b634b 
		"--color-success-50": "228 232 228", // #e4e8e4
		"--color-success-100": "219 224 219", // #dbe0db
		"--color-success-200": "210 216 210", // #d2d8d2
		"--color-success-300": "183 193 183", // #b7c1b7
		"--color-success-400": "129 146 129", // #819281
		"--color-success-500": "75 99 75", // #4b634b
		"--color-success-600": "68 89 68", // #445944
		"--color-success-700": "56 74 56", // #384a38
		"--color-success-800": "45 59 45", // #2d3b2d
		"--color-success-900": "37 49 37", // #253125
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
		// surface | #9ba9ab 
		"--color-surface-50": "240 242 242", // #f0f2f2
		"--color-surface-100": "235 238 238", // #ebeeee
		"--color-surface-200": "230 234 234", // #e6eaea
		"--color-surface-300": "215 221 221", // #d7dddd
		"--color-surface-400": "185 195 196", // #b9c3c4
		"--color-surface-500": "155 169 171", // #9ba9ab
		"--color-surface-600": "140 152 154", // #8c989a
		"--color-surface-700": "116 127 128", // #747f80
		"--color-surface-800": "93 101 103", // #5d6567
		"--color-surface-900": "76 83 84", // #4c5354
		
	}
}