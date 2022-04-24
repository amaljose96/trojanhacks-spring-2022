import cv2
import mediapipe as mp
mp_drawing = mp.solutions.drawing_utils
mp_drawing_styles = mp.solutions.drawing_styles
import torch
from google.protobuf.json_format import MessageToDict
import time
from determine_motion import get_label


mp_hands = mp.solutions.hands

hands = mp_hands.Hands(
    static_image_mode=True,
    max_num_hands=2,
    min_detection_confidence=0.5)

mp_pose = mp.solutions.pose

pose = mp_pose.Pose(
    static_image_mode=True,
    model_complexity=2,
    enable_segmentation=True,
    min_detection_confidence=0.5)



pose_key_point_map = {
    "nose": mp_pose.PoseLandmark.NOSE,
    "rightEye": mp_pose.PoseLandmark.RIGHT_EYE,
    "leftEye": mp_pose.PoseLandmark.LEFT_EYE,
    "rightEar": mp_pose.PoseLandmark.RIGHT_EAR,
    "leftEar": mp_pose.PoseLandmark.LEFT_EAR,
    "rightShoulder": mp_pose.PoseLandmark.RIGHT_SHOULDER,
    "leftShoulder": mp_pose.PoseLandmark.LEFT_SHOULDER,
    "rightElbow": mp_pose.PoseLandmark.RIGHT_ELBOW,
    "leftElbow": mp_pose.PoseLandmark.LEFT_ELBOW,
    "rightWrist": mp_pose.PoseLandmark.RIGHT_WRIST,
    "leftWrist": mp_pose.PoseLandmark.LEFT_WRIST,
}

hand_key_point_map = {
    "wrist": mp_hands.HandLandmark.WRIST,
    "indexTip": mp_hands.HandLandmark.INDEX_FINGER_TIP,
    "indexDIP": mp_hands.HandLandmark.INDEX_FINGER_DIP,
    "indexPIP": mp_hands.HandLandmark.INDEX_FINGER_PIP,
    "indexMCP": mp_hands.HandLandmark.INDEX_FINGER_MCP,
    "middleTip": mp_hands.HandLandmark.MIDDLE_FINGER_TIP,
    "middleDIP": mp_hands.HandLandmark.MIDDLE_FINGER_DIP,
    "middlePIP": mp_hands.HandLandmark.MIDDLE_FINGER_PIP,
    "middleMCP": mp_hands.HandLandmark.MIDDLE_FINGER_MCP,
    "ringTip": mp_hands.HandLandmark.RING_FINGER_TIP,
    "ringDIP": mp_hands.HandLandmark.RING_FINGER_DIP,
    "ringPIP": mp_hands.HandLandmark.RING_FINGER_PIP,
    "ringMCP": mp_hands.HandLandmark.WRIST.RING_FINGER_MCP,
    "littleTip": mp_hands.HandLandmark.PINKY_TIP,
    "littleDIP": mp_hands.HandLandmark.PINKY_DIP,
    "littlePIP": mp_hands.HandLandmark.PINKY_PIP,
    "littleMCP": mp_hands.HandLandmark.PINKY_MCP,
    "thumbTip": mp_hands.HandLandmark.THUMB_TIP,
    "thumbIP": mp_hands.HandLandmark.THUMB_IP,
    "thumbMP": mp_hands.HandLandmark.THUMB_MCP,
    "thumbCMC": mp_hands.HandLandmark.THUMB_CMC,
}


def convert_to_dict(vec, dictionary):
    result = {k : [0.0,0.0] for k in  dictionary.keys() }
    for k,v in dictionary.items():
        if vec is not None:
            result[k] = [vec.landmark[v].x , vec.landmark[v].y]
    return result

counter = 0

def get_body_pose(frame):
    global counter
    left_hand_results = []
    right_hand_results = []
    pose_results = []
    left_hand_key_point_map = { f"{k}_0": v for (k,v) in hand_key_point_map.items()}
    right_hand_key_point_map = { f"{k}_1": v for (k,v) in hand_key_point_map.items()}
    image = cv2.flip(frame, 1)
    image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
    hand_result = hands.process(image)
    pose_result = pose.process(image)
    if hand_result.multi_hand_landmarks is not None:
        for hand_landmarks in hand_result.multi_hand_landmarks:
            mp_drawing.draw_landmarks(
                image,
                hand_landmarks,
                mp_hands.HAND_CONNECTIONS,
                mp_drawing_styles.get_default_hand_landmarks_style(),
                mp_drawing_styles.get_default_hand_connections_style())
    if pose_result.pose_landmarks:
        mp_drawing.draw_landmarks(
            image,
            pose_result.pose_landmarks,
            mp_pose.POSE_CONNECTIONS,
            landmark_drawing_spec=mp_drawing_styles.get_default_pose_landmarks_style())
    left_hand_landmarks = None
    right_hand_landmarks = None
    if hand_result.multi_hand_landmarks is not None:
        left_hand_landmarks = hand_result.multi_hand_landmarks[0]
        if len(hand_result.multi_hand_landmarks) > 1:
            right_hand_landmarks = hand_result.multi_hand_landmarks[1]
        if MessageToDict(hand_result.multi_handedness[0])["classification"][0]["label"] == "Right":
            left_hand_landmarks,right_hand_landmarks = right_hand_landmarks,left_hand_landmarks
    left_hand_results = left_hand_landmarks
    right_hand_results = right_hand_landmarks
    pose_results = pose_result.pose_landmarks
    final_dict = {}
    pose_dict = convert_to_dict(pose_results,pose_key_point_map)
    final_dict.update(pose_dict)
    left_hand_dict = convert_to_dict(left_hand_results, left_hand_key_point_map)
    final_dict.update(left_hand_dict)
    right_hand_dict = convert_to_dict(right_hand_results, right_hand_key_point_map)
    final_dict.update(right_hand_dict)
    label = get_label(final_dict, left_hand_landmarks, right_hand_landmarks)
    cv2.imwrite(f"frame{counter}.png", image)
    if label is None:
        label = "break"
    # counter += 1
    # counter %= 2
    return label

if __name__ == "__main__":
    print(get_body_pose([cv2.imread("image3.png"), cv2.imread("image3.png")]))
    

