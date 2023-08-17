import React, { useState } from "react"
import { View, TouchableOpacity, Text } from "react-native"
import EmojiSelector from "react-native-emoji-selector"

const EmojiPicker = ({ onSelectEmoji }) => {
	const [showEmojiPicker, setShowEmojiPicker] = useState(false)

	const handleEmojiSelect = (emoji) => {
		onSelectEmoji(emoji)
		setShowEmojiPicker(false)
	}

	return (
		<View>
			{showEmojiPicker ? (
				<EmojiSelector onEmojiSelected={handleEmojiSelect} />
			) : (
				<TouchableOpacity onPress={() => setShowEmojiPicker(true)}>
					<Text>Open Emoji Picker</Text>
				</TouchableOpacity>
			)}
		</View>
	)
}

export default EmojiPicker
