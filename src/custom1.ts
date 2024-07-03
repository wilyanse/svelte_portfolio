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
		"--theme-rounded-container": "24px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #1d6d77 
		"--color-primary-50": "221 233 235", // #dde9eb
		"--color-primary-100": "210 226 228", // #d2e2e4
		"--color-primary-200": "199 219 221", // #c7dbdd
		"--color-primary-300": "165 197 201", // #a5c5c9
		"--color-primary-400": "97 153 160", // #6199a0
		"--color-primary-500": "29 109 119", // #1d6d77
		"--color-primary-600": "26 98 107", // #1a626b
		"--color-primary-700": "22 82 89", // #165259
		"--color-primary-800": "17 65 71", // #114147
		"--color-primary-900": "14 53 58", // #0e353a
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
		// tertiary | #1916d4 
		"--color-tertiary-50": "221 220 249", // #dddcf9
		"--color-tertiary-100": "209 208 246", // #d1d0f6
		"--color-tertiary-200": "198 197 244", // #c6c5f4
		"--color-tertiary-300": "163 162 238", // #a3a2ee
		"--color-tertiary-400": "94 92 225", // #5e5ce1
		"--color-tertiary-500": "25 22 212", // #1916d4
		"--color-tertiary-600": "23 20 191", // #1714bf
		"--color-tertiary-700": "19 17 159", // #13119f
		"--color-tertiary-800": "15 13 127", // #0f0d7f
		"--color-tertiary-900": "12 11 104", // #0c0b68
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
		// surface | #525252 
		"--color-surface-50": "229 229 229", // #e5e5e5
		"--color-surface-100": "220 220 220", // #dcdcdc
		"--color-surface-200": "212 212 212", // #d4d4d4
		"--color-surface-300": "186 186 186", // #bababa
		"--color-surface-400": "134 134 134", // #868686
		"--color-surface-500": "82 82 82", // #525252
		"--color-surface-600": "74 74 74", // #4a4a4a
		"--color-surface-700": "62 62 62", // #3e3e3e
		"--color-surface-800": "49 49 49", // #313131
		"--color-surface-900": "40 40 40", // #282828
		
	}
}