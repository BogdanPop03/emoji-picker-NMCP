import React, { useState } from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import EmojiPicker from "./emojiPicker"
import SelectedEmojisList from "./selectedEmojiList"

const Message = ({ content }) => {
	const [selectedEmojis, setSelectedEmojis] = useState([])
	const [showEmojiPicker, setShowEmojiPicker] = useState(false)

	const handleLongPress = () => {
		setShowEmojiPicker(true)
	}

	const handleEmojiSelection = (emoji) => {
		if (!selectedEmojis.includes(emoji)) {
			setSelectedEmojis([...selectedEmojis, emoji])
		}
		setShowEmojiPicker(false)
	}

	const handleEmojiRemoval = (emoji) => {
		const updatedEmojis = selectedEmojis.filter(
			(selectedEmoji) => selectedEmoji !== emoji
		)
		setSelectedEmojis(updatedEmojis)
	}

	return (
		<TouchableOpacity onLongPress={handleLongPress}>
			<View style={styles.messageContainer}>
				<Text>{content}</Text>
				<SelectedEmojisList
					emojis={selectedEmojis}
					onEmojiRemoval={handleEmojiRemoval}
				/>
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
	}
})

export default Message
