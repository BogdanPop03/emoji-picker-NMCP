import React, { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import EmojiPicker from "./emojiPicker"

const Message = ({ content }) => {
	const [selectedEmojis, setSelectedEmojis] = useState([])
	const [showEmojiPicker, setShowEmojiPicker] = useState(false)

	const handleLongPress = () => {
		setShowEmojiPicker(true)
	}

	const handleEmojiSelection = (emoji) => {
		setSelectedEmojis([...selectedEmojis, emoji])
		setShowEmojiPicker(false)
	}

	return (
		<TouchableOpacity onLongPress={handleLongPress}>
			<View style={styles.messageContainer}>
				<Text>{content}</Text>
				<View style={styles.emojiContainer}>
					{selectedEmojis.map((emoji, index) => (
						<Text key={index} style={styles.selectedEmoji}>
							{emoji}
						</Text>
					))}
				</View>
			</View>
			{showEmojiPicker && (
				<EmojiPicker onSelectEmoji={handleEmojiSelection} />
			)}
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	messageContainer: {
		marginVertical: 5
	},
	emojiContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 5
	},
	selectedEmoji: {
		marginRight: 5
	}
})

export default Message
