const Messages = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="max-w-sm mx-auto">
        <h2 className="text-3xl font-extrabold">Select a message</h2>
        <p className="text-neutral-500 leading-5 mt-2">
          Choose from your existing conversations, start a new one, or just keep
          swimming.
        </p>
        <button className="mt-6 bg-sky-500 px-5 py-3 rounded-full font-semibold">
          New message
        </button>
      </div>
    </div>
  );
};

export default Messages;
