import React, { useState } from "react"
import { View, StyleSheet, TextInput, Button, ScrollView } from "react-native"
import Message from "./components/message"

const App = () => {
	const [messages, setMessages] = useState([])
	const [newMessage, setNewMessage] = useState("")

	const handleSend = () => {
		if (newMessage) {
			setMessages([
				...messages,
				{ content: newMessage, selectedEmojis: [] }
			])
			setNewMessage("")
		}
	}

	const handleEmojiSelection = (emoji, index) => {
		const updatedMessages = [...messages]
		updatedMessages[index].selectedEmojis = [
			...updatedMessages[index].selectedEmojis,
			emoji
		]
		setMessages(updatedMessages)
	}

	return (
		<View style={styles.container}>
			<ScrollView style={styles.chatBox}>
				{messages.map((message, index) => (
					<Message
						key={index}
						content={message.content}
						selectedEmojis={message.selectedEmojis}
						onEmojiSelect={(emojis) =>
							handleEmojiSelection(emojis, index)
						}
					/>
				))}
			</ScrollView>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.input}
					placeholder="Type a message..."
					value={newMessage}
					onChangeText={setNewMessage}
				/>
				<Button title="Send" onPress={handleSend} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "stretch",
		marginTop: 50,
		marginBottom: 20
	},
	chatBox: {
		flex: 1,
		paddingHorizontal: 10
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		padding: 10,
		borderTopWidth: 1,
		borderColor: "#ccc"
	},
	input: {
		flex: 1,
		marginRight: 10,
		paddingVertical: 5,
		paddingHorizontal: 10,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 5
	}
})

export default App
