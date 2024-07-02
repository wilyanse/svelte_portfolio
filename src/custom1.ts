// You can also use the generator at https://skeleton.dev/docs/generator to create these values for you
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';
export const custom1: CustomThemeConfig = {
	name: 'custom1',
	properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #124e56 
		"--color-primary-50": "219 228 230", // #dbe4e6
		"--color-primary-100": "208 220 221", // #d0dcdd
		"--color-primary-200": "196 211 213", // #c4d3d5
		"--color-primary-300": "160 184 187", // #a0b8bb
		"--color-primary-400": "89 131 137", // #598389
		"--color-primary-500": "18 78 86", // #124e56
		"--color-primary-600": "16 70 77", // #10464d
		"--color-primary-700": "14 59 65", // #0e3b41
		"--color-primary-800": "11 47 52", // #0b2f34
		"--color-primary-900": "9 38 42", // #09262a
		// secondary | #0ee2f1 
		"--color-secondary-50": "219 251 253", // #dbfbfd
		"--color-secondary-100": "207 249 252", // #cff9fc
		"--color-secondary-200": "195 248 252", // #c3f8fc
		"--color-secondary-300": "159 243 249", // #9ff3f9
		"--color-secondary-400": "86 235 245", // #56ebf5
		"--color-secondary-500": "14 226 241", // #0ee2f1
		"--color-secondary-600": "13 203 217", // #0dcbd9
		"--color-secondary-700": "11 170 181", // #0baab5
		"--color-secondary-800": "8 136 145", // #088891
		"--color-secondary-900": "7 111 118", // #076f76
		// tertiary | #52f689 
		"--color-tertiary-50": "229 254 237", // #e5feed
		"--color-tertiary-100": "220 253 231", // #dcfde7
		"--color-tertiary-200": "212 253 226", // #d4fde2
		"--color-tertiary-300": "186 251 208", // #bafbd0
		"--color-tertiary-400": "134 249 172", // #86f9ac
		"--color-tertiary-500": "82 246 137", // #52f689
		"--color-tertiary-600": "74 221 123", // #4add7b
		"--color-tertiary-700": "62 185 103", // #3eb967
		"--color-tertiary-800": "49 148 82", // #319452
		"--color-tertiary-900": "40 121 67", // #287943
		// success | #c2ac79 
		"--color-success-50": "246 243 235", // #f6f3eb
		"--color-success-100": "243 238 228", // #f3eee4
		"--color-success-200": "240 234 222", // #f0eade
		"--color-success-300": "231 222 201", // #e7dec9
		"--color-success-400": "212 197 161", // #d4c5a1
		"--color-success-500": "194 172 121", // #c2ac79
		"--color-success-600": "175 155 109", // #af9b6d
		"--color-success-700": "146 129 91", // #92815b
		"--color-success-800": "116 103 73", // #746749
		"--color-success-900": "95 84 59", // #5f543b
		// warning | #20a897 
		"--color-warning-50": "222 242 239", // #def2ef
		"--color-warning-100": "210 238 234", // #d2eeea
		"--color-warning-200": "199 233 229", // #c7e9e5
		"--color-warning-300": "166 220 213", // #a6dcd5
		"--color-warning-400": "99 194 182", // #63c2b6
		"--color-warning-500": "32 168 151", // #20a897
		"--color-warning-600": "29 151 136", // #1d9788
		"--color-warning-700": "24 126 113", // #187e71
		"--color-warning-800": "19 101 91", // #13655b
		"--color-warning-900": "16 82 74", // #10524a
		// error | #ae437f 
		"--color-error-50": "243 227 236", // #f3e3ec
		"--color-error-100": "239 217 229", // #efd9e5
		"--color-error-200": "235 208 223", // #ebd0df
		"--color-error-300": "223 180 204", // #dfb4cc
		"--color-error-400": "198 123 165", // #c67ba5
		"--color-error-500": "174 67 127", // #ae437f
		"--color-error-600": "157 60 114", // #9d3c72
		"--color-error-700": "131 50 95", // #83325f
		"--color-error-800": "104 40 76", // #68284c
		"--color-error-900": "85 33 62", // #55213e
		// surface | #2f666f 
		"--color-surface-50": "224 232 233", // #e0e8e9
		"--color-surface-100": "213 224 226", // #d5e0e2
		"--color-surface-200": "203 217 219", // #cbd9db
		"--color-surface-300": "172 194 197", // #acc2c5
		"--color-surface-400": "109 148 154", // #6d949a
		"--color-surface-500": "47 102 111", // #2f666f
		"--color-surface-600": "42 92 100", // #2a5c64
		"--color-surface-700": "35 77 83", // #234d53
		"--color-surface-800": "28 61 67", // #1c3d43
		"--color-surface-900": "23 50 54", // #173236
		
	}
}