// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var message = message || {};

/**
 * @enum
 */
message.RpcStatus = {
  OK: 1,
  Error: 2
};

/**
 * @constructor
 */
message.SetupStreamRequest = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {message.SetupStreamRequest}
 */
message.SetupStreamRequest.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {message.SetupStreamRequest=} obj
 * @returns {message.SetupStreamRequest}
 */
message.SetupStreamRequest.getRootAsSetupStreamRequest = function(bb, obj) {
  return (obj || new message.SetupStreamRequest).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
message.SetupStreamRequest.prototype.streamId = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @param {flatbuffers.Builder} builder
 */
message.SetupStreamRequest.startSetupStreamRequest = function(builder) {
  builder.startObject(1);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} streamIdOffset
 */
message.SetupStreamRequest.addStreamId = function(builder, streamIdOffset) {
  builder.addFieldOffset(0, streamIdOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
message.SetupStreamRequest.endSetupStreamRequest = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
message.SetupStreamRequest.finishSetupStreamRequestBuffer = function(builder, offset) {
  builder.finish(offset);
};

/**
 * @constructor
 */
message.SetupStreamResponse = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {message.SetupStreamResponse}
 */
message.SetupStreamResponse.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {message.SetupStreamResponse=} obj
 * @returns {message.SetupStreamResponse}
 */
message.SetupStreamResponse.getRootAsSetupStreamResponse = function(bb, obj) {
  return (obj || new message.SetupStreamResponse).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {flatbuffers.Encoding=} optionalEncoding
 * @returns {string|Uint8Array}
 */
message.SetupStreamResponse.prototype.streamId = function(optionalEncoding) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? this.bb.__string(this.bb_pos + offset, optionalEncoding) : null;
};

/**
 * @returns {message.RpcStatus}
 */
message.SetupStreamResponse.prototype.status = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? /** @type {message.RpcStatus} */ (this.bb.readInt8(this.bb_pos + offset)) : message.RpcStatus.OK;
};

/**
 * @param {flatbuffers.Builder} builder
 */
message.SetupStreamResponse.startSetupStreamResponse = function(builder) {
  builder.startObject(2);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} streamIdOffset
 */
message.SetupStreamResponse.addStreamId = function(builder, streamIdOffset) {
  builder.addFieldOffset(0, streamIdOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {message.RpcStatus} status
 */
message.SetupStreamResponse.addStatus = function(builder, status) {
  builder.addFieldInt8(1, status, message.RpcStatus.OK);
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
message.SetupStreamResponse.endSetupStreamResponse = function(builder) {
  var offset = builder.endObject();
  return offset;
};

// Exports for Node.js and RequireJS
this.message = message;
