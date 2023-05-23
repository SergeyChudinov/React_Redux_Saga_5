export const Alert = ({alert}) => (
	<div className={`alert alert-${alert.type}`} role="alert">
		{alert.text}
	</div>
)