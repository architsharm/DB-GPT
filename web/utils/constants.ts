import { ModelType } from '@/types/chat';
import { DBType } from '@/types/db';

export const MODEL_ICON_MAP: Record<ModelType, { label: string; icon: string }> = {
  proxyllm: { label: 'Proxy LLM', icon: '/models/chatgpt.png' },
  'flan-t5-base': { label: 'flan-t5-base', icon: '/models/google.png' },
  'vicuna-13b': { label: 'vicuna-13b', icon: '/models/vicuna.jpeg' },
  'vicuna-7b': { label: 'vicuna-7b', icon: '/models/vicuna.jpeg' },
  'vicuna-13b-v1.5': { label: 'vicuna-13b-v1.5', icon: '/models/vicuna.jpeg' },
  'vicuna-7b-v1.5': { label: 'vicuna-7b-v1.5', icon: '/models/vicuna.jpeg' },
  'codegen2-1b': { label: 'codegen2-1B', icon: '/models/vicuna.jpeg' },
  'codet5p-2b': { label: 'codet5p-2b', icon: '/models/vicuna.jpeg' },
  'chatglm-6b-int4': { label: 'chatglm-6b-int4', icon: '/models/chatglm.png' },
  'chatglm-6b': { label: 'chatglm-6b', icon: '/models/chatglm.png' },
  'chatglm2-6b': { label: 'chatglm2-6b', icon: '/models/chatglm.png' },
  'chatglm2-6b-int4': { label: 'chatglm2-6b-int4', icon: '/models/chatglm.png' },
  'guanaco-33b-merged': { label: 'guanaco-33b-merged', icon: '/models/huggingface.svg' },
  'falcon-40b': { label: 'falcon-40b', icon: '/models/falcon.jpeg' },
  'gorilla-7b': { label: 'gorilla-7b', icon: '/models/gorilla.png' },
  'gptj-6b': { label: 'ggml-gpt4all-j-v1.3-groovy.bin', icon: '' },
  chatgpt_proxyllm: { label: 'chatgpt_proxyllm', icon: '/models/chatgpt.png' },
  bard_proxyllm: { label: 'bard_proxyllm', icon: '/models/bard.gif' },
  claude_proxyllm: { label: 'claude_proxyllm', icon: '/models/claude.png' },
  wenxin_proxyllm: { label: 'wenxin_proxyllm', icon: '' },
  tongyi_proxyllm: { label: 'tongyi_proxyllm', icon: '/models/qwen2.png' },
  zhipu_proxyllm: { label: 'zhipu_proxyllm', icon: '/models/zhipu.png' },
  yi_proxyllm: { label: 'yi_proxyllm', icon: '/models/yi.svg' },
  "yi-34b-chat": { label: 'yi-34b-chat', icon: '/models/yi.svg' },
  "yi-34b-chat-8bits": { label: 'yi-34b-chat-8bits', icon: '/models/yi.svg' },
  "yi-34b-chat-4bits": { label: 'yi-34b-chat-4bits', icon: '/models/yi.svg' },
  "yi-6b-chat": { label: 'yi-6b-chat', icon: '/models/yi.svg' },
  'llama-2-7b': { label: 'Llama-2-7b-chat-hf', icon: '/models/llama.jpg' },
  'llama-2-13b': { label: 'Llama-2-13b-chat-hf', icon: '/models/llama.jpg' },
  'llama-2-70b': { label: 'Llama-2-70b-chat-hf', icon: '/models/llama.jpg' },
  'baichuan-13b': { label: 'Baichuan-13B-Chat', icon: '/models/baichuan.png' },
  'baichuan-7b': { label: 'baichuan-7b', icon: '/models/baichuan.png' },
  'baichuan2-7b': { label: 'Baichuan2-7B-Chat', icon: '/models/baichuan.png' },
  'baichuan2-13b': { label: 'Baichuan2-13B-Chat', icon: '/models/baichuan.png' },
  'wizardlm-13b': { label: 'WizardLM-13B-V1.2', icon: '/models/wizardlm.png' },
  'llama-cpp': { label: 'ggml-model-q4_0.bin', icon: '/models/huggingface.svg' },
  'internlm-7b': { label: 'internlm-chat-7b-v1_1', icon: '/models/internlm.png' },
  'internlm-7b-8k': { label: 'internlm-chat-7b-8k', icon: '/models/internlm.png' },
  'solar-10.7b-instruct-v1.0': { label: 'solar-10.7b-instruct-v1.0', icon: '/models/solar_logo.png' },
};

export const dbMapper: Record<DBType, { label: string; icon: string; desc: string }> = {
  mysql: { label: 'MySQL', icon: '/icons/mysql.png', desc: 'Fast, reliable, scalable open-source relational database management system.' },
  mssql: { label: 'MSSQL', icon: '/icons/mssql.png', desc: 'Powerful, scalable, secure relational database system by Microsoft.' },
  duckdb: { label: 'DuckDB', icon: '/icons/duckdb.png', desc: 'In-memory analytical database with efficient query processing.' },
  sqlite: { label: 'Sqlite', icon: '/icons/sqlite.png', desc: 'Lightweight embedded relational database with simplicity and portability.' },
  clickhouse: { label: 'ClickHouse', icon: '/icons/clickhouse.png', desc: 'Columnar database for high-performance analytics and real-time queries.' },
  oracle: { label: 'Oracle', icon: '/icons/oracle.png', desc: 'Robust, scalable, secure relational database widely used in enterprises.' },
  access: { label: 'Access', icon: '/icons/access.png', desc: 'Easy-to-use relational database for small-scale applications by Microsoft.' },
  mongodb: { label: 'MongoDB', icon: '/icons/mongodb.png', desc: 'Flexible, scalable NoSQL document database for web and mobile apps.' },
  doris: { label: 'ApacheDoris', icon: '/icons/doris.png', desc: 'A new-generation open-source real-time data warehouse.' },
  starrocks: { label: 'StarRocks', icon: '/icons/starrocks.png', desc: 'An Open-Source, High-Performance Analytical Database.' },
  db2: { label: 'DB2', icon: '/icons/db2.png', desc: 'Scalable, secure relational database system developed by IBM.' },
  hbase: { label: 'HBase', icon: '/icons/hbase.png', desc: 'Distributed, scalable NoSQL database for large structured/semi-structured data.' },
  redis: { label: 'Redis', icon: '/icons/redis.png', desc: 'Fast, versatile in-memory data structure store as cache, DB, or broker.' },
  cassandra: { label: 'Cassandra', icon: '/icons/cassandra.png', desc: 'Scalable, fault-tolerant distributed NoSQL database for large data.' },
  couchbase: { label: 'Couchbase', icon: '/icons/couchbase.png', desc: 'High-performance NoSQL document database with distributed architecture.' },
  postgresql: {
    label: 'PostgreSQL',
    icon: '/icons/postgresql.png',
    desc: 'Powerful open-source relational database with extensibility and SQL standards.',
  },
  vertica: {
    label: 'Vertica',
    icon: '/icons/vertica.png',
    desc: 'Vertica is a strongly consistent, ACID-compliant, SQL data warehouse, built for the scale and complexity of today’s data-driven world.',
  },
  spark: { label: 'Spark', icon: '/icons/spark.png', desc: 'Unified engine for large-scale data analytics.' },
  hive: { label: 'Hive', icon: '/icons/hive.png', desc: 'A distributed fault-tolerant data warehouse system.' },
  space: { label: 'Space', icon: '/icons/knowledge.png', desc: 'knowledge analytics.' },
  cubejs: { label: 'CubeJS', icon: '/icons/cubejs.png', desc: 'Open-source analytics engine for building data applications.' },
  tugraph:{label: 'TuGraph', icon: '/icons/tugraph.png', desc: 'TuGraph is a high-performance graph database jointly developed by Ant Group and Tsinghua University.' }
};
