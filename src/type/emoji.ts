// 받은(안읽은) emoji 조회
export interface EmojiReadResponse {
  send_seq: number;
  e_id: number;
  sender_id: string;
  receiver_id: string;
  reg_time: string;
}

// emoji 보내기
export interface EmojiSendRequest {
  e_id: number;
  receiver_id: string;
}

// 일별 히스토리 emoji 조회
export interface EmojiHistoryResponse {
  send_seq: string;
  e_id: number;
  sender_id: string;
  receiver_id: string;
  reg_time: string;
}

export interface EmojiCount {
  count: number;
}
