import axios from 'axios';
import { BASE_URL } from '../constants';

export const TemplateApi = Object.freeze({
  sleep(milliseconds: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  },
  async getModels(): Promise<string[]> {
    try {
      const url = new URL(`/model/list`, BASE_URL);
      const res = await axios.get(url.toString());
      return ["abc", "def"];
    } catch (e) {
      return []
    }
  },
});

// const mapToAccounts = (raws: any[]): AccountDto[] => {
//   return raws.map<AccountDto>((item) => {
//     return mapToRawAccount(item);
//   });
// };
//
// const mapToRawAccount = (item: any): AccountDto => {
//   const about_me: AboutMeDto = item[1]?.about_me ? JSON.parse(atob(item[1]?.about_me)) : null;
//   const displayName = about_me == null ? '' : about_me.first_name + ' ' + about_me.last_name;
//   return {
//     id: item[0],
//     numFollowers: item[1]?.num_followers,
//     numFollowing: item[1]?.num_following,
//     numPosts: item[1]?.num_posts,
//     lastPostHeight: item[1]?.last_post_height,
//     avatar: item[1]?.avatar,
//     thumbnail: item[1]?.thumbnail,
//     bio: about_me == null ? '' : about_me.about ?? '',
//     displayName,
//     invitedBy: item?.invited_by,
//     relatedConversations: item[1]?.related_conversations,
//     messagePubKey: item[1]?.message_pub_key,
//     about_me,
//   };
// };
//
// const mapToAccount = (item: any): AccountDto => {
//   const about_me: AboutMeDto = item?.about_me ? JSON.parse(atob(item?.about_me)) : null;
//   let displayName = '';
//   if (!!about_me) {
//     if (!!about_me.first_name) displayName += about_me.first_name;
//     if (!!about_me.last_name) displayName += ' ' + about_me.last_name;
//   }
//   displayName = displayName.trim();
//   return {
//     id: item.account_id,
//     numFollowers: item.num_followers,
//     numFollowing: item.num_following,
//     numPosts: item.num_posts,
//     lastPostHeight: item.last_post_height,
//     avatar: item.avatar,
//     thumbnail: item.thumbnail,
//     bio: about_me == null ? '' : about_me.about ?? '',
//     displayName,
//     invitedBy: item.invited_by,
//     relatedConversations: item.related_conversations,
//     messagePubKey: item.message_pub_key,
//     about_me,
//   };
// };