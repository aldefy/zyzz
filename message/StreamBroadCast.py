# automatically generated by the FlatBuffers compiler, do not modify

# namespace: message

import flatbuffers

class StreamBroadCast(object):
    __slots__ = ['_tab']

    @classmethod
    def GetRootAsStreamBroadCast(cls, buf, offset):
        n = flatbuffers.encode.Get(flatbuffers.packer.uoffset, buf, offset)
        x = StreamBroadCast()
        x.Init(buf, n + offset)
        return x

    # StreamBroadCast
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # StreamBroadCast
    def Encoding(self):
        o = flatbuffers.number_types.UOffsetTFlags.py_type(self._tab.Offset(4))
        if o != 0:
            return self._tab.Get(flatbuffers.number_types.Int8Flags, o + self._tab.Pos)
        return 1

def StreamBroadCastStart(builder): builder.StartObject(1)
def StreamBroadCastAddEncoding(builder, encoding): builder.PrependInt8Slot(0, encoding, 1)
def StreamBroadCastEnd(builder): return builder.EndObject()