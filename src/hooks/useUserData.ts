import { useUser } from '@clerk/clerk-react'
import { useState, useEffect } from 'react'

export function useUserData() {
	const { isSignedIn, user, isLoaded } = useUser()
	const [guestData, setGuestData] = useState({ name: '', email: '' })

	// Pobieranie danych gościa z localStorage przy montowaniu
	useEffect(() => {
		const saved = localStorage.getItem('guest_data')
		if (saved) {
			try {
				setGuestData(JSON.parse(saved))
			} catch (e) {
				console.error('Błąd parsowania guest_data', e)
			}
		}
	}, [])

	// Funkcja do ręcznego zapisu (np. po kliknięciu checkboxa w blogu)
	const saveGuestData = (name: string, email: string, shouldSave: boolean) => {
		if (shouldSave) {
			const data = { name, email }
			localStorage.setItem('guest_data', JSON.stringify(data))
			setGuestData(data)
		} else {
			localStorage.removeItem('guest_data')
			setGuestData({ name: '', email: '' })
		}
	}

	return {
		isLoaded,
		isSignedIn,
		// Dane priorytetowe
		userData: {
			name: isSignedIn ? (user.username ?? user.fullName ?? '') : guestData.name,
			email: isSignedIn ? (user.primaryEmailAddress?.emailAddress ?? '') : guestData.email,
			avatar: isSignedIn ? user.imageUrl : '/images/blog/default-user-avatar.jpg',
		},
		saveGuestData,
	}
}
