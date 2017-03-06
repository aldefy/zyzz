# automatically generated by the FlatBuffers compiler, do not modify

# namespace: message

import flatbuffers

class StreamComment(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsStreamComment(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = StreamComment()
        x.Init(buf, n + offset)
        return x

    # StreamComment
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # StreamComment
    def UserId(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # StreamComment
    def UserName(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(6))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # StreamComment
    def Text(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(8))
        if o != 0:
            return self._tab.String(o + self._tab.Pos)
        return ""

    # StreamComment
    def Timestamp(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(10))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int64Flags, o + self._tab.Pos)
        return 0

def StreamCommentStart(builder): builder.StartObject(4)
def StreamCommentAddUserId(builder, userId): builder.PrependUOffsetTRelativeSlot(0, flatbuffers.number_types.UOffsetTFlags.py_type(userId), 0)
def StreamCommentAddUserName(builder, userName): builder.PrependUOffsetTRelativeSlot(1, flatbuffers.number_types.UOffsetTFlags.py_type(userName), 0)
def StreamCommentAddText(builder, text): builder.PrependUOffsetTRelativeSlot(2, flatbuffers.number_types.UOffsetTFlags.py_type(text), 0)
def StreamCommentAddTimestamp(builder, timestamp): builder.PrependInt64Slot(3, timestamp, 0)
def StreamCommentEnd(builder): return builder.EndObject()
