import { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

// Terms of Use and Privacy Policy
import TermsOfUse from './greedy.md'

export const TermsPage = () => {
	const [tosText, setTosText] = useState('')
	const [privacyPolicyText, setPrivacyPolicyText] = useState('')

	// Fetch Terms of Use
	useEffect(() => {
		fetch(TermsOfUse).then(res => res.text()).then(text => setTosText(text))
	})

	

	return (
		<div>
			<ReactMarkdown children={tosText} />
		</div>
	)
}