/**
 * 
 * @param {*} amount How thick you want the divider to be in (px) pixels 
 * @returns The divider with the thickness given 
 */
export default function Spacer({ amount }) {
	return <div style={{ height: `${amount}px`}}></div>;
}