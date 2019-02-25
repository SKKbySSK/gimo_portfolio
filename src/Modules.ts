declare module "*.png" {
	const value: any;
	export = value;
}

declare module 'careers/*.json' {
	const value: Career;
	export = value;
}

declare module "*.css" {
	const classes: string; // css-moduleの結果をstring型のobjectに
	export = classes
	// import style from "./foo.css"で読み込みたいなら下記（後述）
	// export default classes
}