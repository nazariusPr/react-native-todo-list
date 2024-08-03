import React from "react";
import { StyleSheet, Modal, View, Text, Button } from "react-native";

type GoalDeleteProps = {
  visible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
};

export function GoalDelete({ visible, onCancel, onConfirm }: GoalDeleteProps) {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>
            Are you sure you want to delete this task?
          </Text>
          <View style={styles.buttonContainer}>
            <View style={styles.buttonWrapper}>
              <Button title="Cancel" onPress={onCancel} color="#ff5c5c" />
            </View>
            <View style={styles.buttonWrapper}>
              <Button
                title="Confirm"
                onPress={() => {
                  onConfirm();
                  onCancel();
                }}
                color="#4CAF50"
              />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalText: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 18,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  buttonWrapper: {
    flex: 1,
    marginHorizontal: 10,
  },
});
