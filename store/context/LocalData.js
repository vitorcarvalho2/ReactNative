import * as FileSystem from "expo-file-system";

async function LocalData(uri) {
  const contactId = Date.now().toString();
  const fileName = `contact_${contactId}.jpg`;
  const localPath = FileSystem.documentDirectory + fileName;

  try {
    await FileSystem.moveAsync({
      from: uri,
      to: localPath,
    });
    return localPath;
  } catch (error) {
    throw error;
  }
}

export default LocalData;
