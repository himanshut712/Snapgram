import Avatar from "./Avatar";

export default function FriendInfo() {
  return (
    <div className="flex gap-2">
      <Avatar url={"https://images.unsplash.com/photo-1518644730709-0835105d9daa?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d2hpdGUlMjBtZW58ZW58MHwwfDB8fHww"} />
      <div>
        <h3 className="font-bold text-xl">Jane Doe</h3>
        <div className="text-sm leading-3">5 mutual friends</div>
      </div>
    </div>
  );
}