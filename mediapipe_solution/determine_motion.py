

# hand_key_point_map = {
#     "wrist": mp_hands.HandLandmark.WRIST,
#     "indexTip": mp_hands.HandLandmark.INDEX_FINGER_TIP,
#     "indexDIP": mp_hands.HandLandmark.INDEX_FINGER_DIP,
#     "indexPIP": mp_hands.HandLandmark.INDEX_FINGER_PIP,
#     "indexMCP": mp_hands.HandLandmark.INDEX_FINGER_MCP,
#     "middleTip": mp_hands.HandLandmark.MIDDLE_FINGER_TIP,
#     "middleDIP": mp_hands.HandLandmark.MIDDLE_FINGER_DIP,
#     "middlePIP": mp_hands.HandLandmark.MIDDLE_FINGER_PIP,
#     "middleMCP": mp_hands.HandLandmark.MIDDLE_FINGER_MCP,
#     "ringTip": mp_hands.HandLandmark.RING_FINGER_TIP,
#     "ringDIP": mp_hands.HandLandmark.RING_FINGER_DIP,
#     "ringPIP": mp_hands.HandLandmark.RING_FINGER_PIP,
#     "ringMCP": mp_hands.HandLandmark.WRIST.RING_FINGER_MCP,
#     "littleTip": mp_hands.HandLandmark.PINKY_TIP,
#     "littleDIP": mp_hands.HandLandmark.PINKY_DIP,
#     "littlePIP": mp_hands.HandLandmark.PINKY_PIP,
#     "littleMCP": mp_hands.HandLandmark.PINKY_MCP,
#     "thumbTip": mp_hands.HandLandmark.THUMB_TIP,
#     "thumbIP": mp_hands.HandLandmark.THUMB_IP,
#     "thumbMP": mp_hands.HandLandmark.THUMB_MCP,
#     "thumbCMC": mp_hands.HandLandmark.THUMB_CMC,
# }


def is_parallel(points):
    len_p = len(points)
    diffs = []
    for  i in range(1,len_p):
        if abs(points[i] - points[0]) > 0.05:
            return False
    return True
    
        

def get_label(positions, left, right):

    if(positions["ringTip_1"][0] < positions["indexTip_0"][0]) and (left is not None) and (right is not None):
        return "study"
    
    
    
    diffs = [
        positions["littleTip_1"][1] - positions["ringTip_1"][1],
        positions["ringTip_1"][1] - positions["middleTip_1"][1],
        positions["indexTip_1"][1] - positions["middleTip_1"][1],        
    ]
    diffs = [abs(diff) for diff in diffs]
    if (max(diffs) == diffs[0]) and (diffs[0] > 2*diffs[1]) and (right is not None) and (left is None):
        return "I"
    
    if (abs(positions["littleTip_1"][0] - positions["littleTip_0"][0]) <= 0.05) and (left is not None) and (right is not None) and (positions["littleTip_1"][1] < positions["littlePIP_1"][1]):
        return "book"
    
    if  (left is None) and (right is not None) and is_parallel([positions["indexTip_1"][1],positions["indexDIP_1"][1],positions["indexPIP_1"][1], positions["indexMCP_1"][1]]) and (positions["thumbTip_1"][1] > positions["indexTip_1"][1]):
        return "they"
    
    if (left is not None) and (right is not None) and (abs(positions["littlePIP_0"][0] - positions["littlePIP_1"][0]) < 0.05):
        return "class"
    

    if (right is not None) and (left is None) and is_parallel([positions["thumbTip_1"][0],positions["thumbIP_1"][0],positions["thumbMP_1"][0]]):
        return "complete"
    
    return None

