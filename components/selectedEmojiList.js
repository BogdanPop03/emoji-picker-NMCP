import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const SelectedEmojisList = ({ emojis, onEmojiRemoval }) => {
	return (
		<View style={styles.emojiContainer}>
			{emojis.map((emoji, index) => (
				<TouchableOpacity
					key={index}
					onPress={() => onEmojiRemoval(emoji)}
					style={styles.selectedEmojiContainer}
				>
					<Text style={styles.selectedEmoji}>{emoji}</Text>
				</TouchableOpacity>
			))}
		</View>
	)
}

const styles = StyleSheet.create({
	emojiContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		marginTop: 5
	},
	selectedEmojiContainer: {
		marginRight: 5
	},
	selectedEmoji: {
		fontSize: 20
	}
})

export default SelectedEmojisList
