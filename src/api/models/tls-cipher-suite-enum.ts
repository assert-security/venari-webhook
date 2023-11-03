/* tslint:disable */
/* eslint-disable */

/**
 * 0 = TLS_NULL_WITH_NULL_NULL ()
 * 
 * 1 = TLS_RSA_WITH_NULL_MD5 ()
 * 
 * 2 = TLS_RSA_WITH_NULL_SHA ()
 * 
 * 3 = TLS_RSA_EXPORT_WITH_RC4_40_MD5 ()
 * 
 * 4 = TLS_RSA_WITH_RC4_128_MD5 ()
 * 
 * 5 = TLS_RSA_WITH_RC4_128_SHA ()
 * 
 * 6 = TLS_RSA_EXPORT_WITH_RC2_CBC_40_MD5 ()
 * 
 * 7 = TLS_RSA_WITH_IDEA_CBC_SHA ()
 * 
 * 8 = TLS_RSA_EXPORT_WITH_DES40_CBC_SHA ()
 * 
 * 9 = TLS_RSA_WITH_DES_CBC_SHA ()
 * 
 * 10 = TLS_RSA_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 11 = TLS_DH_DSS_EXPORT_WITH_DES40_CBC_SHA ()
 * 
 * 12 = TLS_DH_DSS_WITH_DES_CBC_SHA ()
 * 
 * 13 = TLS_DH_DSS_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 14 = TLS_DH_RSA_EXPORT_WITH_DES40_CBC_SHA ()
 * 
 * 15 = TLS_DH_RSA_WITH_DES_CBC_SHA ()
 * 
 * 16 = TLS_DH_RSA_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 17 = TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA ()
 * 
 * 18 = TLS_DHE_DSS_WITH_DES_CBC_SHA ()
 * 
 * 19 = TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 20 = TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA ()
 * 
 * 21 = TLS_DHE_RSA_WITH_DES_CBC_SHA ()
 * 
 * 22 = TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 23 = TLS_DH_anon_EXPORT_WITH_RC4_40_MD5 ()
 * 
 * 24 = TLS_DH_anon_WITH_RC4_128_MD5 ()
 * 
 * 25 = TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA ()
 * 
 * 26 = TLS_DH_anon_WITH_DES_CBC_SHA ()
 * 
 * 27 = TLS_DH_anon_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 30 = TLS_KRB5_WITH_DES_CBC_SHA ()
 * 
 * 31 = TLS_KRB5_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 32 = TLS_KRB5_WITH_RC4_128_SHA ()
 * 
 * 33 = TLS_KRB5_WITH_IDEA_CBC_SHA ()
 * 
 * 34 = TLS_KRB5_WITH_DES_CBC_MD5 ()
 * 
 * 35 = TLS_KRB5_WITH_3DES_EDE_CBC_MD5 ()
 * 
 * 36 = TLS_KRB5_WITH_RC4_128_MD5 ()
 * 
 * 37 = TLS_KRB5_WITH_IDEA_CBC_MD5 ()
 * 
 * 38 = TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA ()
 * 
 * 39 = TLS_KRB5_EXPORT_WITH_RC2_CBC_40_SHA ()
 * 
 * 40 = TLS_KRB5_EXPORT_WITH_RC4_40_SHA ()
 * 
 * 41 = TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5 ()
 * 
 * 42 = TLS_KRB5_EXPORT_WITH_RC2_CBC_40_MD5 ()
 * 
 * 43 = TLS_KRB5_EXPORT_WITH_RC4_40_MD5 ()
 * 
 * 44 = TLS_PSK_WITH_NULL_SHA ()
 * 
 * 45 = TLS_DHE_PSK_WITH_NULL_SHA ()
 * 
 * 46 = TLS_RSA_PSK_WITH_NULL_SHA ()
 * 
 * 47 = TLS_RSA_WITH_AES_128_CBC_SHA ()
 * 
 * 48 = TLS_DH_DSS_WITH_AES_128_CBC_SHA ()
 * 
 * 49 = TLS_DH_RSA_WITH_AES_128_CBC_SHA ()
 * 
 * 50 = TLS_DHE_DSS_WITH_AES_128_CBC_SHA ()
 * 
 * 51 = TLS_DHE_RSA_WITH_AES_128_CBC_SHA ()
 * 
 * 52 = TLS_DH_anon_WITH_AES_128_CBC_SHA ()
 * 
 * 53 = TLS_RSA_WITH_AES_256_CBC_SHA ()
 * 
 * 54 = TLS_DH_DSS_WITH_AES_256_CBC_SHA ()
 * 
 * 55 = TLS_DH_RSA_WITH_AES_256_CBC_SHA ()
 * 
 * 56 = TLS_DHE_DSS_WITH_AES_256_CBC_SHA ()
 * 
 * 57 = TLS_DHE_RSA_WITH_AES_256_CBC_SHA ()
 * 
 * 58 = TLS_DH_anon_WITH_AES_256_CBC_SHA ()
 * 
 * 59 = TLS_RSA_WITH_NULL_SHA256 ()
 * 
 * 60 = TLS_RSA_WITH_AES_128_CBC_SHA256 ()
 * 
 * 61 = TLS_RSA_WITH_AES_256_CBC_SHA256 ()
 * 
 * 62 = TLS_DH_DSS_WITH_AES_128_CBC_SHA256 ()
 * 
 * 63 = TLS_DH_RSA_WITH_AES_128_CBC_SHA256 ()
 * 
 * 64 = TLS_DHE_DSS_WITH_AES_128_CBC_SHA256 ()
 * 
 * 65 = TLS_RSA_WITH_CAMELLIA_128_CBC_SHA ()
 * 
 * 66 = TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA ()
 * 
 * 67 = TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA ()
 * 
 * 68 = TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA ()
 * 
 * 69 = TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA ()
 * 
 * 70 = TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA ()
 * 
 * 103 = TLS_DHE_RSA_WITH_AES_128_CBC_SHA256 ()
 * 
 * 104 = TLS_DH_DSS_WITH_AES_256_CBC_SHA256 ()
 * 
 * 105 = TLS_DH_RSA_WITH_AES_256_CBC_SHA256 ()
 * 
 * 106 = TLS_DHE_DSS_WITH_AES_256_CBC_SHA256 ()
 * 
 * 107 = TLS_DHE_RSA_WITH_AES_256_CBC_SHA256 ()
 * 
 * 108 = TLS_DH_anon_WITH_AES_128_CBC_SHA256 ()
 * 
 * 109 = TLS_DH_anon_WITH_AES_256_CBC_SHA256 ()
 * 
 * 132 = TLS_RSA_WITH_CAMELLIA_256_CBC_SHA ()
 * 
 * 133 = TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA ()
 * 
 * 134 = TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA ()
 * 
 * 135 = TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA ()
 * 
 * 136 = TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA ()
 * 
 * 137 = TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA ()
 * 
 * 138 = TLS_PSK_WITH_RC4_128_SHA ()
 * 
 * 139 = TLS_PSK_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 140 = TLS_PSK_WITH_AES_128_CBC_SHA ()
 * 
 * 141 = TLS_PSK_WITH_AES_256_CBC_SHA ()
 * 
 * 142 = TLS_DHE_PSK_WITH_RC4_128_SHA ()
 * 
 * 143 = TLS_DHE_PSK_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 144 = TLS_DHE_PSK_WITH_AES_128_CBC_SHA ()
 * 
 * 145 = TLS_DHE_PSK_WITH_AES_256_CBC_SHA ()
 * 
 * 146 = TLS_RSA_PSK_WITH_RC4_128_SHA ()
 * 
 * 147 = TLS_RSA_PSK_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 148 = TLS_RSA_PSK_WITH_AES_128_CBC_SHA ()
 * 
 * 149 = TLS_RSA_PSK_WITH_AES_256_CBC_SHA ()
 * 
 * 150 = TLS_RSA_WITH_SEED_CBC_SHA ()
 * 
 * 151 = TLS_DH_DSS_WITH_SEED_CBC_SHA ()
 * 
 * 152 = TLS_DH_RSA_WITH_SEED_CBC_SHA ()
 * 
 * 153 = TLS_DHE_DSS_WITH_SEED_CBC_SHA ()
 * 
 * 154 = TLS_DHE_RSA_WITH_SEED_CBC_SHA ()
 * 
 * 155 = TLS_DH_anon_WITH_SEED_CBC_SHA ()
 * 
 * 156 = TLS_RSA_WITH_AES_128_GCM_SHA256 ()
 * 
 * 157 = TLS_RSA_WITH_AES_256_GCM_SHA384 ()
 * 
 * 158 = TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 ()
 * 
 * 159 = TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 ()
 * 
 * 160 = TLS_DH_RSA_WITH_AES_128_GCM_SHA256 ()
 * 
 * 161 = TLS_DH_RSA_WITH_AES_256_GCM_SHA384 ()
 * 
 * 162 = TLS_DHE_DSS_WITH_AES_128_GCM_SHA256 ()
 * 
 * 163 = TLS_DHE_DSS_WITH_AES_256_GCM_SHA384 ()
 * 
 * 164 = TLS_DH_DSS_WITH_AES_128_GCM_SHA256 ()
 * 
 * 165 = TLS_DH_DSS_WITH_AES_256_GCM_SHA384 ()
 * 
 * 166 = TLS_DH_anon_WITH_AES_128_GCM_SHA256 ()
 * 
 * 167 = TLS_DH_anon_WITH_AES_256_GCM_SHA384 ()
 * 
 * 168 = TLS_PSK_WITH_AES_128_GCM_SHA256 ()
 * 
 * 169 = TLS_PSK_WITH_AES_256_GCM_SHA384 ()
 * 
 * 170 = TLS_DHE_PSK_WITH_AES_128_GCM_SHA256 ()
 * 
 * 171 = TLS_DHE_PSK_WITH_AES_256_GCM_SHA384 ()
 * 
 * 172 = TLS_RSA_PSK_WITH_AES_128_GCM_SHA256 ()
 * 
 * 173 = TLS_RSA_PSK_WITH_AES_256_GCM_SHA384 ()
 * 
 * 174 = TLS_PSK_WITH_AES_128_CBC_SHA256 ()
 * 
 * 175 = TLS_PSK_WITH_AES_256_CBC_SHA384 ()
 * 
 * 176 = TLS_PSK_WITH_NULL_SHA256 ()
 * 
 * 177 = TLS_PSK_WITH_NULL_SHA384 ()
 * 
 * 178 = TLS_DHE_PSK_WITH_AES_128_CBC_SHA256 ()
 * 
 * 179 = TLS_DHE_PSK_WITH_AES_256_CBC_SHA384 ()
 * 
 * 180 = TLS_DHE_PSK_WITH_NULL_SHA256 ()
 * 
 * 181 = TLS_DHE_PSK_WITH_NULL_SHA384 ()
 * 
 * 182 = TLS_RSA_PSK_WITH_AES_128_CBC_SHA256 ()
 * 
 * 183 = TLS_RSA_PSK_WITH_AES_256_CBC_SHA384 ()
 * 
 * 184 = TLS_RSA_PSK_WITH_NULL_SHA256 ()
 * 
 * 185 = TLS_RSA_PSK_WITH_NULL_SHA384 ()
 * 
 * 186 = TLS_RSA_WITH_CAMELLIA_128_CBC_SHA256 ()
 * 
 * 187 = TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA256 ()
 * 
 * 188 = TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA256 ()
 * 
 * 189 = TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA256 ()
 * 
 * 190 = TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA256 ()
 * 
 * 191 = TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA256 ()
 * 
 * 192 = TLS_RSA_WITH_CAMELLIA_256_CBC_SHA256 ()
 * 
 * 193 = TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA256 ()
 * 
 * 194 = TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA256 ()
 * 
 * 195 = TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA256 ()
 * 
 * 196 = TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA256 ()
 * 
 * 197 = TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA256 ()
 * 
 * 255 = TLS_EMPTY_RENEGOTIATION_INFO_SCSV ()
 * 
 * 4865 = TLS_AES_128_GCM_SHA256 ()
 * 
 * 4866 = TLS_AES_256_GCM_SHA384 ()
 * 
 * 4867 = TLS_CHACHA20_POLY1305_SHA256 ()
 * 
 * 4868 = TLS_AES_128_CCM_SHA256 ()
 * 
 * 4869 = TLS_AES_128_CCM_8_SHA256 ()
 * 
 * 22016 = TLS_FALLBACK_SCSV ()
 * 
 * 49153 = TLS_ECDH_ECDSA_WITH_NULL_SHA ()
 * 
 * 49154 = TLS_ECDH_ECDSA_WITH_RC4_128_SHA ()
 * 
 * 49155 = TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 49156 = TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA ()
 * 
 * 49157 = TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA ()
 * 
 * 49158 = TLS_ECDHE_ECDSA_WITH_NULL_SHA ()
 * 
 * 49159 = TLS_ECDHE_ECDSA_WITH_RC4_128_SHA ()
 * 
 * 49160 = TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 49161 = TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA ()
 * 
 * 49162 = TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA ()
 * 
 * 49163 = TLS_ECDH_RSA_WITH_NULL_SHA ()
 * 
 * 49164 = TLS_ECDH_RSA_WITH_RC4_128_SHA ()
 * 
 * 49165 = TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 49166 = TLS_ECDH_RSA_WITH_AES_128_CBC_SHA ()
 * 
 * 49167 = TLS_ECDH_RSA_WITH_AES_256_CBC_SHA ()
 * 
 * 49168 = TLS_ECDHE_RSA_WITH_NULL_SHA ()
 * 
 * 49169 = TLS_ECDHE_RSA_WITH_RC4_128_SHA ()
 * 
 * 49170 = TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 49171 = TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA ()
 * 
 * 49172 = TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA ()
 * 
 * 49173 = TLS_ECDH_anon_WITH_NULL_SHA ()
 * 
 * 49174 = TLS_ECDH_anon_WITH_RC4_128_SHA ()
 * 
 * 49175 = TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 49176 = TLS_ECDH_anon_WITH_AES_128_CBC_SHA ()
 * 
 * 49177 = TLS_ECDH_anon_WITH_AES_256_CBC_SHA ()
 * 
 * 49178 = TLS_SRP_SHA_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 49179 = TLS_SRP_SHA_RSA_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 49180 = TLS_SRP_SHA_DSS_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 49181 = TLS_SRP_SHA_WITH_AES_128_CBC_SHA ()
 * 
 * 49182 = TLS_SRP_SHA_RSA_WITH_AES_128_CBC_SHA ()
 * 
 * 49183 = TLS_SRP_SHA_DSS_WITH_AES_128_CBC_SHA ()
 * 
 * 49184 = TLS_SRP_SHA_WITH_AES_256_CBC_SHA ()
 * 
 * 49185 = TLS_SRP_SHA_RSA_WITH_AES_256_CBC_SHA ()
 * 
 * 49186 = TLS_SRP_SHA_DSS_WITH_AES_256_CBC_SHA ()
 * 
 * 49187 = TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256 ()
 * 
 * 49188 = TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384 ()
 * 
 * 49189 = TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256 ()
 * 
 * 49190 = TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384 ()
 * 
 * 49191 = TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256 ()
 * 
 * 49192 = TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384 ()
 * 
 * 49193 = TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256 ()
 * 
 * 49194 = TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384 ()
 * 
 * 49195 = TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 ()
 * 
 * 49196 = TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 ()
 * 
 * 49197 = TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256 ()
 * 
 * 49198 = TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384 ()
 * 
 * 49199 = TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 ()
 * 
 * 49200 = TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 ()
 * 
 * 49201 = TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256 ()
 * 
 * 49202 = TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384 ()
 * 
 * 49203 = TLS_ECDHE_PSK_WITH_RC4_128_SHA ()
 * 
 * 49204 = TLS_ECDHE_PSK_WITH_3DES_EDE_CBC_SHA ()
 * 
 * 49205 = TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA ()
 * 
 * 49206 = TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA ()
 * 
 * 49207 = TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA256 ()
 * 
 * 49208 = TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA384 ()
 * 
 * 49209 = TLS_ECDHE_PSK_WITH_NULL_SHA ()
 * 
 * 49210 = TLS_ECDHE_PSK_WITH_NULL_SHA256 ()
 * 
 * 49211 = TLS_ECDHE_PSK_WITH_NULL_SHA384 ()
 * 
 * 49212 = TLS_RSA_WITH_ARIA_128_CBC_SHA256 ()
 * 
 * 49213 = TLS_RSA_WITH_ARIA_256_CBC_SHA384 ()
 * 
 * 49214 = TLS_DH_DSS_WITH_ARIA_128_CBC_SHA256 ()
 * 
 * 49215 = TLS_DH_DSS_WITH_ARIA_256_CBC_SHA384 ()
 * 
 * 49216 = TLS_DH_RSA_WITH_ARIA_128_CBC_SHA256 ()
 * 
 * 49217 = TLS_DH_RSA_WITH_ARIA_256_CBC_SHA384 ()
 * 
 * 49218 = TLS_DHE_DSS_WITH_ARIA_128_CBC_SHA256 ()
 * 
 * 49219 = TLS_DHE_DSS_WITH_ARIA_256_CBC_SHA384 ()
 * 
 * 49220 = TLS_DHE_RSA_WITH_ARIA_128_CBC_SHA256 ()
 * 
 * 49221 = TLS_DHE_RSA_WITH_ARIA_256_CBC_SHA384 ()
 * 
 * 49222 = TLS_DH_anon_WITH_ARIA_128_CBC_SHA256 ()
 * 
 * 49223 = TLS_DH_anon_WITH_ARIA_256_CBC_SHA384 ()
 * 
 * 49224 = TLS_ECDHE_ECDSA_WITH_ARIA_128_CBC_SHA256 ()
 * 
 * 49225 = TLS_ECDHE_ECDSA_WITH_ARIA_256_CBC_SHA384 ()
 * 
 * 49226 = TLS_ECDH_ECDSA_WITH_ARIA_128_CBC_SHA256 ()
 * 
 * 49227 = TLS_ECDH_ECDSA_WITH_ARIA_256_CBC_SHA384 ()
 * 
 * 49228 = TLS_ECDHE_RSA_WITH_ARIA_128_CBC_SHA256 ()
 * 
 * 49229 = TLS_ECDHE_RSA_WITH_ARIA_256_CBC_SHA384 ()
 * 
 * 49230 = TLS_ECDH_RSA_WITH_ARIA_128_CBC_SHA256 ()
 * 
 * 49231 = TLS_ECDH_RSA_WITH_ARIA_256_CBC_SHA384 ()
 * 
 * 49232 = TLS_RSA_WITH_ARIA_128_GCM_SHA256 ()
 * 
 * 49233 = TLS_RSA_WITH_ARIA_256_GCM_SHA384 ()
 * 
 * 49234 = TLS_DHE_RSA_WITH_ARIA_128_GCM_SHA256 ()
 * 
 * 49235 = TLS_DHE_RSA_WITH_ARIA_256_GCM_SHA384 ()
 * 
 * 49236 = TLS_DH_RSA_WITH_ARIA_128_GCM_SHA256 ()
 * 
 * 49237 = TLS_DH_RSA_WITH_ARIA_256_GCM_SHA384 ()
 * 
 * 49238 = TLS_DHE_DSS_WITH_ARIA_128_GCM_SHA256 ()
 * 
 * 49239 = TLS_DHE_DSS_WITH_ARIA_256_GCM_SHA384 ()
 * 
 * 49240 = TLS_DH_DSS_WITH_ARIA_128_GCM_SHA256 ()
 * 
 * 49241 = TLS_DH_DSS_WITH_ARIA_256_GCM_SHA384 ()
 * 
 * 49242 = TLS_DH_anon_WITH_ARIA_128_GCM_SHA256 ()
 * 
 * 49243 = TLS_DH_anon_WITH_ARIA_256_GCM_SHA384 ()
 * 
 * 49244 = TLS_ECDHE_ECDSA_WITH_ARIA_128_GCM_SHA256 ()
 * 
 * 49245 = TLS_ECDHE_ECDSA_WITH_ARIA_256_GCM_SHA384 ()
 * 
 * 49246 = TLS_ECDH_ECDSA_WITH_ARIA_128_GCM_SHA256 ()
 * 
 * 49247 = TLS_ECDH_ECDSA_WITH_ARIA_256_GCM_SHA384 ()
 * 
 * 49248 = TLS_ECDHE_RSA_WITH_ARIA_128_GCM_SHA256 ()
 * 
 * 49249 = TLS_ECDHE_RSA_WITH_ARIA_256_GCM_SHA384 ()
 * 
 * 49250 = TLS_ECDH_RSA_WITH_ARIA_128_GCM_SHA256 ()
 * 
 * 49251 = TLS_ECDH_RSA_WITH_ARIA_256_GCM_SHA384 ()
 * 
 * 49252 = TLS_PSK_WITH_ARIA_128_CBC_SHA256 ()
 * 
 * 49253 = TLS_PSK_WITH_ARIA_256_CBC_SHA384 ()
 * 
 * 49254 = TLS_DHE_PSK_WITH_ARIA_128_CBC_SHA256 ()
 * 
 * 49255 = TLS_DHE_PSK_WITH_ARIA_256_CBC_SHA384 ()
 * 
 * 49256 = TLS_RSA_PSK_WITH_ARIA_128_CBC_SHA256 ()
 * 
 * 49257 = TLS_RSA_PSK_WITH_ARIA_256_CBC_SHA384 ()
 * 
 * 49258 = TLS_PSK_WITH_ARIA_128_GCM_SHA256 ()
 * 
 * 49259 = TLS_PSK_WITH_ARIA_256_GCM_SHA384 ()
 * 
 * 49260 = TLS_DHE_PSK_WITH_ARIA_128_GCM_SHA256 ()
 * 
 * 49261 = TLS_DHE_PSK_WITH_ARIA_256_GCM_SHA384 ()
 * 
 * 49262 = TLS_RSA_PSK_WITH_ARIA_128_GCM_SHA256 ()
 * 
 * 49263 = TLS_RSA_PSK_WITH_ARIA_256_GCM_SHA384 ()
 * 
 * 49264 = TLS_ECDHE_PSK_WITH_ARIA_128_CBC_SHA256 ()
 * 
 * 49265 = TLS_ECDHE_PSK_WITH_ARIA_256_CBC_SHA384 ()
 * 
 * 49266 = TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_CBC_SHA256 ()
 * 
 * 49267 = TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_CBC_SHA384 ()
 * 
 * 49268 = TLS_ECDH_ECDSA_WITH_CAMELLIA_128_CBC_SHA256 ()
 * 
 * 49269 = TLS_ECDH_ECDSA_WITH_CAMELLIA_256_CBC_SHA384 ()
 * 
 * 49270 = TLS_ECDHE_RSA_WITH_CAMELLIA_128_CBC_SHA256 ()
 * 
 * 49271 = TLS_ECDHE_RSA_WITH_CAMELLIA_256_CBC_SHA384 ()
 * 
 * 49272 = TLS_ECDH_RSA_WITH_CAMELLIA_128_CBC_SHA256 ()
 * 
 * 49273 = TLS_ECDH_RSA_WITH_CAMELLIA_256_CBC_SHA384 ()
 * 
 * 49274 = TLS_RSA_WITH_CAMELLIA_128_GCM_SHA256 ()
 * 
 * 49275 = TLS_RSA_WITH_CAMELLIA_256_GCM_SHA384 ()
 * 
 * 49276 = TLS_DHE_RSA_WITH_CAMELLIA_128_GCM_SHA256 ()
 * 
 * 49277 = TLS_DHE_RSA_WITH_CAMELLIA_256_GCM_SHA384 ()
 * 
 * 49278 = TLS_DH_RSA_WITH_CAMELLIA_128_GCM_SHA256 ()
 * 
 * 49279 = TLS_DH_RSA_WITH_CAMELLIA_256_GCM_SHA384 ()
 * 
 * 49280 = TLS_DHE_DSS_WITH_CAMELLIA_128_GCM_SHA256 ()
 * 
 * 49281 = TLS_DHE_DSS_WITH_CAMELLIA_256_GCM_SHA384 ()
 * 
 * 49282 = TLS_DH_DSS_WITH_CAMELLIA_128_GCM_SHA256 ()
 * 
 * 49283 = TLS_DH_DSS_WITH_CAMELLIA_256_GCM_SHA384 ()
 * 
 * 49284 = TLS_DH_anon_WITH_CAMELLIA_128_GCM_SHA256 ()
 * 
 * 49285 = TLS_DH_anon_WITH_CAMELLIA_256_GCM_SHA384 ()
 * 
 * 49286 = TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_GCM_SHA256 ()
 * 
 * 49287 = TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_GCM_SHA384 ()
 * 
 * 49288 = TLS_ECDH_ECDSA_WITH_CAMELLIA_128_GCM_SHA256 ()
 * 
 * 49289 = TLS_ECDH_ECDSA_WITH_CAMELLIA_256_GCM_SHA384 ()
 * 
 * 49290 = TLS_ECDHE_RSA_WITH_CAMELLIA_128_GCM_SHA256 ()
 * 
 * 49291 = TLS_ECDHE_RSA_WITH_CAMELLIA_256_GCM_SHA384 ()
 * 
 * 49292 = TLS_ECDH_RSA_WITH_CAMELLIA_128_GCM_SHA256 ()
 * 
 * 49293 = TLS_ECDH_RSA_WITH_CAMELLIA_256_GCM_SHA384 ()
 * 
 * 49294 = TLS_PSK_WITH_CAMELLIA_128_GCM_SHA256 ()
 * 
 * 49295 = TLS_PSK_WITH_CAMELLIA_256_GCM_SHA384 ()
 * 
 * 49296 = TLS_DHE_PSK_WITH_CAMELLIA_128_GCM_SHA256 ()
 * 
 * 49297 = TLS_DHE_PSK_WITH_CAMELLIA_256_GCM_SHA384 ()
 * 
 * 49298 = TLS_RSA_PSK_WITH_CAMELLIA_128_GCM_SHA256 ()
 * 
 * 49299 = TLS_RSA_PSK_WITH_CAMELLIA_256_GCM_SHA384 ()
 * 
 * 49300 = TLS_PSK_WITH_CAMELLIA_128_CBC_SHA256 ()
 * 
 * 49301 = TLS_PSK_WITH_CAMELLIA_256_CBC_SHA384 ()
 * 
 * 49302 = TLS_DHE_PSK_WITH_CAMELLIA_128_CBC_SHA256 ()
 * 
 * 49303 = TLS_DHE_PSK_WITH_CAMELLIA_256_CBC_SHA384 ()
 * 
 * 49304 = TLS_RSA_PSK_WITH_CAMELLIA_128_CBC_SHA256 ()
 * 
 * 49305 = TLS_RSA_PSK_WITH_CAMELLIA_256_CBC_SHA384 ()
 * 
 * 49306 = TLS_ECDHE_PSK_WITH_CAMELLIA_128_CBC_SHA256 ()
 * 
 * 49307 = TLS_ECDHE_PSK_WITH_CAMELLIA_256_CBC_SHA384 ()
 * 
 * 49308 = TLS_RSA_WITH_AES_128_CCM ()
 * 
 * 49309 = TLS_RSA_WITH_AES_256_CCM ()
 * 
 * 49310 = TLS_DHE_RSA_WITH_AES_128_CCM ()
 * 
 * 49311 = TLS_DHE_RSA_WITH_AES_256_CCM ()
 * 
 * 49312 = TLS_RSA_WITH_AES_128_CCM_8 ()
 * 
 * 49313 = TLS_RSA_WITH_AES_256_CCM_8 ()
 * 
 * 49314 = TLS_DHE_RSA_WITH_AES_128_CCM_8 ()
 * 
 * 49315 = TLS_DHE_RSA_WITH_AES_256_CCM_8 ()
 * 
 * 49316 = TLS_PSK_WITH_AES_128_CCM ()
 * 
 * 49317 = TLS_PSK_WITH_AES_256_CCM ()
 * 
 * 49318 = TLS_DHE_PSK_WITH_AES_128_CCM ()
 * 
 * 49319 = TLS_DHE_PSK_WITH_AES_256_CCM ()
 * 
 * 49320 = TLS_PSK_WITH_AES_128_CCM_8 ()
 * 
 * 49321 = TLS_PSK_WITH_AES_256_CCM_8 ()
 * 
 * 49322 = TLS_PSK_DHE_WITH_AES_128_CCM_8 ()
 * 
 * 49323 = TLS_PSK_DHE_WITH_AES_256_CCM_8 ()
 * 
 * 49324 = TLS_ECDHE_ECDSA_WITH_AES_128_CCM ()
 * 
 * 49325 = TLS_ECDHE_ECDSA_WITH_AES_256_CCM ()
 * 
 * 49326 = TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8 ()
 * 
 * 49327 = TLS_ECDHE_ECDSA_WITH_AES_256_CCM_8 ()
 * 
 * 49328 = TLS_ECCPWD_WITH_AES_128_GCM_SHA256 ()
 * 
 * 49329 = TLS_ECCPWD_WITH_AES_256_GCM_SHA384 ()
 * 
 * 49330 = TLS_ECCPWD_WITH_AES_128_CCM_SHA256 ()
 * 
 * 49331 = TLS_ECCPWD_WITH_AES_256_CCM_SHA384 ()
 * 
 * 52243 = OLD_TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 ()
 * 
 * 52244 = OLD_TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 ()
 * 
 * 52245 = OLD_TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256 ()
 * 
 * 52392 = TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 ()
 * 
 * 52393 = TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 ()
 * 
 * 52394 = TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256 ()
 * 
 * 52395 = TLS_PSK_WITH_CHACHA20_POLY1305_SHA256 ()
 * 
 * 52396 = TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256 ()
 * 
 * 52397 = TLS_DHE_PSK_WITH_CHACHA20_POLY1305_SHA256 ()
 * 
 * 52398 = TLS_RSA_PSK_WITH_CHACHA20_POLY1305_SHA256 ()
 * 
 * 53249 = TLS_ECDHE_PSK_WITH_AES_128_GCM_SHA256 ()
 * 
 * 53250 = TLS_ECDHE_PSK_WITH_AES_256_GCM_SHA384 ()
 * 
 * 53251 = TLS_ECDHE_PSK_WITH_AES_128_CCM_8_SHA256 ()
 * 
 * 53253 = TLS_ECDHE_PSK_WITH_AES_128_CCM_SHA256 ()
 * 
 * 65535 = Unknown ()
 */
export enum TlsCipherSuiteEnum {
  TLS_NULL_WITH_NULL_NULL = 0,
  TLS_RSA_WITH_NULL_MD5 = 1,
  TLS_RSA_WITH_NULL_SHA = 2,
  TLS_RSA_EXPORT_WITH_RC4_40_MD5 = 3,
  TLS_RSA_WITH_RC4_128_MD5 = 4,
  TLS_RSA_WITH_RC4_128_SHA = 5,
  TLS_RSA_EXPORT_WITH_RC2_CBC_40_MD5 = 6,
  TLS_RSA_WITH_IDEA_CBC_SHA = 7,
  TLS_RSA_EXPORT_WITH_DES40_CBC_SHA = 8,
  TLS_RSA_WITH_DES_CBC_SHA = 9,
  TLS_RSA_WITH_3DES_EDE_CBC_SHA = 10,
  TLS_DH_DSS_EXPORT_WITH_DES40_CBC_SHA = 11,
  TLS_DH_DSS_WITH_DES_CBC_SHA = 12,
  TLS_DH_DSS_WITH_3DES_EDE_CBC_SHA = 13,
  TLS_DH_RSA_EXPORT_WITH_DES40_CBC_SHA = 14,
  TLS_DH_RSA_WITH_DES_CBC_SHA = 15,
  TLS_DH_RSA_WITH_3DES_EDE_CBC_SHA = 16,
  TLS_DHE_DSS_EXPORT_WITH_DES40_CBC_SHA = 17,
  TLS_DHE_DSS_WITH_DES_CBC_SHA = 18,
  TLS_DHE_DSS_WITH_3DES_EDE_CBC_SHA = 19,
  TLS_DHE_RSA_EXPORT_WITH_DES40_CBC_SHA = 20,
  TLS_DHE_RSA_WITH_DES_CBC_SHA = 21,
  TLS_DHE_RSA_WITH_3DES_EDE_CBC_SHA = 22,
  TLS_DH_anon_EXPORT_WITH_RC4_40_MD5 = 23,
  TLS_DH_anon_WITH_RC4_128_MD5 = 24,
  TLS_DH_anon_EXPORT_WITH_DES40_CBC_SHA = 25,
  TLS_DH_anon_WITH_DES_CBC_SHA = 26,
  TLS_DH_anon_WITH_3DES_EDE_CBC_SHA = 27,
  TLS_KRB5_WITH_DES_CBC_SHA = 30,
  TLS_KRB5_WITH_3DES_EDE_CBC_SHA = 31,
  TLS_KRB5_WITH_RC4_128_SHA = 32,
  TLS_KRB5_WITH_IDEA_CBC_SHA = 33,
  TLS_KRB5_WITH_DES_CBC_MD5 = 34,
  TLS_KRB5_WITH_3DES_EDE_CBC_MD5 = 35,
  TLS_KRB5_WITH_RC4_128_MD5 = 36,
  TLS_KRB5_WITH_IDEA_CBC_MD5 = 37,
  TLS_KRB5_EXPORT_WITH_DES_CBC_40_SHA = 38,
  TLS_KRB5_EXPORT_WITH_RC2_CBC_40_SHA = 39,
  TLS_KRB5_EXPORT_WITH_RC4_40_SHA = 40,
  TLS_KRB5_EXPORT_WITH_DES_CBC_40_MD5 = 41,
  TLS_KRB5_EXPORT_WITH_RC2_CBC_40_MD5 = 42,
  TLS_KRB5_EXPORT_WITH_RC4_40_MD5 = 43,
  TLS_PSK_WITH_NULL_SHA = 44,
  TLS_DHE_PSK_WITH_NULL_SHA = 45,
  TLS_RSA_PSK_WITH_NULL_SHA = 46,
  TLS_RSA_WITH_AES_128_CBC_SHA = 47,
  TLS_DH_DSS_WITH_AES_128_CBC_SHA = 48,
  TLS_DH_RSA_WITH_AES_128_CBC_SHA = 49,
  TLS_DHE_DSS_WITH_AES_128_CBC_SHA = 50,
  TLS_DHE_RSA_WITH_AES_128_CBC_SHA = 51,
  TLS_DH_anon_WITH_AES_128_CBC_SHA = 52,
  TLS_RSA_WITH_AES_256_CBC_SHA = 53,
  TLS_DH_DSS_WITH_AES_256_CBC_SHA = 54,
  TLS_DH_RSA_WITH_AES_256_CBC_SHA = 55,
  TLS_DHE_DSS_WITH_AES_256_CBC_SHA = 56,
  TLS_DHE_RSA_WITH_AES_256_CBC_SHA = 57,
  TLS_DH_anon_WITH_AES_256_CBC_SHA = 58,
  TLS_RSA_WITH_NULL_SHA256 = 59,
  TLS_RSA_WITH_AES_128_CBC_SHA256 = 60,
  TLS_RSA_WITH_AES_256_CBC_SHA256 = 61,
  TLS_DH_DSS_WITH_AES_128_CBC_SHA256 = 62,
  TLS_DH_RSA_WITH_AES_128_CBC_SHA256 = 63,
  TLS_DHE_DSS_WITH_AES_128_CBC_SHA256 = 64,
  TLS_RSA_WITH_CAMELLIA_128_CBC_SHA = 65,
  TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA = 66,
  TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA = 67,
  TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA = 68,
  TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA = 69,
  TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA = 70,
  TLS_DHE_RSA_WITH_AES_128_CBC_SHA256 = 103,
  TLS_DH_DSS_WITH_AES_256_CBC_SHA256 = 104,
  TLS_DH_RSA_WITH_AES_256_CBC_SHA256 = 105,
  TLS_DHE_DSS_WITH_AES_256_CBC_SHA256 = 106,
  TLS_DHE_RSA_WITH_AES_256_CBC_SHA256 = 107,
  TLS_DH_anon_WITH_AES_128_CBC_SHA256 = 108,
  TLS_DH_anon_WITH_AES_256_CBC_SHA256 = 109,
  TLS_RSA_WITH_CAMELLIA_256_CBC_SHA = 132,
  TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA = 133,
  TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA = 134,
  TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA = 135,
  TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA = 136,
  TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA = 137,
  TLS_PSK_WITH_RC4_128_SHA = 138,
  TLS_PSK_WITH_3DES_EDE_CBC_SHA = 139,
  TLS_PSK_WITH_AES_128_CBC_SHA = 140,
  TLS_PSK_WITH_AES_256_CBC_SHA = 141,
  TLS_DHE_PSK_WITH_RC4_128_SHA = 142,
  TLS_DHE_PSK_WITH_3DES_EDE_CBC_SHA = 143,
  TLS_DHE_PSK_WITH_AES_128_CBC_SHA = 144,
  TLS_DHE_PSK_WITH_AES_256_CBC_SHA = 145,
  TLS_RSA_PSK_WITH_RC4_128_SHA = 146,
  TLS_RSA_PSK_WITH_3DES_EDE_CBC_SHA = 147,
  TLS_RSA_PSK_WITH_AES_128_CBC_SHA = 148,
  TLS_RSA_PSK_WITH_AES_256_CBC_SHA = 149,
  TLS_RSA_WITH_SEED_CBC_SHA = 150,
  TLS_DH_DSS_WITH_SEED_CBC_SHA = 151,
  TLS_DH_RSA_WITH_SEED_CBC_SHA = 152,
  TLS_DHE_DSS_WITH_SEED_CBC_SHA = 153,
  TLS_DHE_RSA_WITH_SEED_CBC_SHA = 154,
  TLS_DH_anon_WITH_SEED_CBC_SHA = 155,
  TLS_RSA_WITH_AES_128_GCM_SHA256 = 156,
  TLS_RSA_WITH_AES_256_GCM_SHA384 = 157,
  TLS_DHE_RSA_WITH_AES_128_GCM_SHA256 = 158,
  TLS_DHE_RSA_WITH_AES_256_GCM_SHA384 = 159,
  TLS_DH_RSA_WITH_AES_128_GCM_SHA256 = 160,
  TLS_DH_RSA_WITH_AES_256_GCM_SHA384 = 161,
  TLS_DHE_DSS_WITH_AES_128_GCM_SHA256 = 162,
  TLS_DHE_DSS_WITH_AES_256_GCM_SHA384 = 163,
  TLS_DH_DSS_WITH_AES_128_GCM_SHA256 = 164,
  TLS_DH_DSS_WITH_AES_256_GCM_SHA384 = 165,
  TLS_DH_anon_WITH_AES_128_GCM_SHA256 = 166,
  TLS_DH_anon_WITH_AES_256_GCM_SHA384 = 167,
  TLS_PSK_WITH_AES_128_GCM_SHA256 = 168,
  TLS_PSK_WITH_AES_256_GCM_SHA384 = 169,
  TLS_DHE_PSK_WITH_AES_128_GCM_SHA256 = 170,
  TLS_DHE_PSK_WITH_AES_256_GCM_SHA384 = 171,
  TLS_RSA_PSK_WITH_AES_128_GCM_SHA256 = 172,
  TLS_RSA_PSK_WITH_AES_256_GCM_SHA384 = 173,
  TLS_PSK_WITH_AES_128_CBC_SHA256 = 174,
  TLS_PSK_WITH_AES_256_CBC_SHA384 = 175,
  TLS_PSK_WITH_NULL_SHA256 = 176,
  TLS_PSK_WITH_NULL_SHA384 = 177,
  TLS_DHE_PSK_WITH_AES_128_CBC_SHA256 = 178,
  TLS_DHE_PSK_WITH_AES_256_CBC_SHA384 = 179,
  TLS_DHE_PSK_WITH_NULL_SHA256 = 180,
  TLS_DHE_PSK_WITH_NULL_SHA384 = 181,
  TLS_RSA_PSK_WITH_AES_128_CBC_SHA256 = 182,
  TLS_RSA_PSK_WITH_AES_256_CBC_SHA384 = 183,
  TLS_RSA_PSK_WITH_NULL_SHA256 = 184,
  TLS_RSA_PSK_WITH_NULL_SHA384 = 185,
  TLS_RSA_WITH_CAMELLIA_128_CBC_SHA256 = 186,
  TLS_DH_DSS_WITH_CAMELLIA_128_CBC_SHA256 = 187,
  TLS_DH_RSA_WITH_CAMELLIA_128_CBC_SHA256 = 188,
  TLS_DHE_DSS_WITH_CAMELLIA_128_CBC_SHA256 = 189,
  TLS_DHE_RSA_WITH_CAMELLIA_128_CBC_SHA256 = 190,
  TLS_DH_anon_WITH_CAMELLIA_128_CBC_SHA256 = 191,
  TLS_RSA_WITH_CAMELLIA_256_CBC_SHA256 = 192,
  TLS_DH_DSS_WITH_CAMELLIA_256_CBC_SHA256 = 193,
  TLS_DH_RSA_WITH_CAMELLIA_256_CBC_SHA256 = 194,
  TLS_DHE_DSS_WITH_CAMELLIA_256_CBC_SHA256 = 195,
  TLS_DHE_RSA_WITH_CAMELLIA_256_CBC_SHA256 = 196,
  TLS_DH_anon_WITH_CAMELLIA_256_CBC_SHA256 = 197,
  TLS_EMPTY_RENEGOTIATION_INFO_SCSV = 255,
  TLS_AES_128_GCM_SHA256 = 4865,
  TLS_AES_256_GCM_SHA384 = 4866,
  TLS_CHACHA20_POLY1305_SHA256 = 4867,
  TLS_AES_128_CCM_SHA256 = 4868,
  TLS_AES_128_CCM_8_SHA256 = 4869,
  TLS_FALLBACK_SCSV = 22016,
  TLS_ECDH_ECDSA_WITH_NULL_SHA = 49153,
  TLS_ECDH_ECDSA_WITH_RC4_128_SHA = 49154,
  TLS_ECDH_ECDSA_WITH_3DES_EDE_CBC_SHA = 49155,
  TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA = 49156,
  TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA = 49157,
  TLS_ECDHE_ECDSA_WITH_NULL_SHA = 49158,
  TLS_ECDHE_ECDSA_WITH_RC4_128_SHA = 49159,
  TLS_ECDHE_ECDSA_WITH_3DES_EDE_CBC_SHA = 49160,
  TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA = 49161,
  TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA = 49162,
  TLS_ECDH_RSA_WITH_NULL_SHA = 49163,
  TLS_ECDH_RSA_WITH_RC4_128_SHA = 49164,
  TLS_ECDH_RSA_WITH_3DES_EDE_CBC_SHA = 49165,
  TLS_ECDH_RSA_WITH_AES_128_CBC_SHA = 49166,
  TLS_ECDH_RSA_WITH_AES_256_CBC_SHA = 49167,
  TLS_ECDHE_RSA_WITH_NULL_SHA = 49168,
  TLS_ECDHE_RSA_WITH_RC4_128_SHA = 49169,
  TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA = 49170,
  TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA = 49171,
  TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA = 49172,
  TLS_ECDH_anon_WITH_NULL_SHA = 49173,
  TLS_ECDH_anon_WITH_RC4_128_SHA = 49174,
  TLS_ECDH_anon_WITH_3DES_EDE_CBC_SHA = 49175,
  TLS_ECDH_anon_WITH_AES_128_CBC_SHA = 49176,
  TLS_ECDH_anon_WITH_AES_256_CBC_SHA = 49177,
  TLS_SRP_SHA_WITH_3DES_EDE_CBC_SHA = 49178,
  TLS_SRP_SHA_RSA_WITH_3DES_EDE_CBC_SHA = 49179,
  TLS_SRP_SHA_DSS_WITH_3DES_EDE_CBC_SHA = 49180,
  TLS_SRP_SHA_WITH_AES_128_CBC_SHA = 49181,
  TLS_SRP_SHA_RSA_WITH_AES_128_CBC_SHA = 49182,
  TLS_SRP_SHA_DSS_WITH_AES_128_CBC_SHA = 49183,
  TLS_SRP_SHA_WITH_AES_256_CBC_SHA = 49184,
  TLS_SRP_SHA_RSA_WITH_AES_256_CBC_SHA = 49185,
  TLS_SRP_SHA_DSS_WITH_AES_256_CBC_SHA = 49186,
  TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256 = 49187,
  TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384 = 49188,
  TLS_ECDH_ECDSA_WITH_AES_128_CBC_SHA256 = 49189,
  TLS_ECDH_ECDSA_WITH_AES_256_CBC_SHA384 = 49190,
  TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256 = 49191,
  TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384 = 49192,
  TLS_ECDH_RSA_WITH_AES_128_CBC_SHA256 = 49193,
  TLS_ECDH_RSA_WITH_AES_256_CBC_SHA384 = 49194,
  TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256 = 49195,
  TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384 = 49196,
  TLS_ECDH_ECDSA_WITH_AES_128_GCM_SHA256 = 49197,
  TLS_ECDH_ECDSA_WITH_AES_256_GCM_SHA384 = 49198,
  TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256 = 49199,
  TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384 = 49200,
  TLS_ECDH_RSA_WITH_AES_128_GCM_SHA256 = 49201,
  TLS_ECDH_RSA_WITH_AES_256_GCM_SHA384 = 49202,
  TLS_ECDHE_PSK_WITH_RC4_128_SHA = 49203,
  TLS_ECDHE_PSK_WITH_3DES_EDE_CBC_SHA = 49204,
  TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA = 49205,
  TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA = 49206,
  TLS_ECDHE_PSK_WITH_AES_128_CBC_SHA256 = 49207,
  TLS_ECDHE_PSK_WITH_AES_256_CBC_SHA384 = 49208,
  TLS_ECDHE_PSK_WITH_NULL_SHA = 49209,
  TLS_ECDHE_PSK_WITH_NULL_SHA256 = 49210,
  TLS_ECDHE_PSK_WITH_NULL_SHA384 = 49211,
  TLS_RSA_WITH_ARIA_128_CBC_SHA256 = 49212,
  TLS_RSA_WITH_ARIA_256_CBC_SHA384 = 49213,
  TLS_DH_DSS_WITH_ARIA_128_CBC_SHA256 = 49214,
  TLS_DH_DSS_WITH_ARIA_256_CBC_SHA384 = 49215,
  TLS_DH_RSA_WITH_ARIA_128_CBC_SHA256 = 49216,
  TLS_DH_RSA_WITH_ARIA_256_CBC_SHA384 = 49217,
  TLS_DHE_DSS_WITH_ARIA_128_CBC_SHA256 = 49218,
  TLS_DHE_DSS_WITH_ARIA_256_CBC_SHA384 = 49219,
  TLS_DHE_RSA_WITH_ARIA_128_CBC_SHA256 = 49220,
  TLS_DHE_RSA_WITH_ARIA_256_CBC_SHA384 = 49221,
  TLS_DH_anon_WITH_ARIA_128_CBC_SHA256 = 49222,
  TLS_DH_anon_WITH_ARIA_256_CBC_SHA384 = 49223,
  TLS_ECDHE_ECDSA_WITH_ARIA_128_CBC_SHA256 = 49224,
  TLS_ECDHE_ECDSA_WITH_ARIA_256_CBC_SHA384 = 49225,
  TLS_ECDH_ECDSA_WITH_ARIA_128_CBC_SHA256 = 49226,
  TLS_ECDH_ECDSA_WITH_ARIA_256_CBC_SHA384 = 49227,
  TLS_ECDHE_RSA_WITH_ARIA_128_CBC_SHA256 = 49228,
  TLS_ECDHE_RSA_WITH_ARIA_256_CBC_SHA384 = 49229,
  TLS_ECDH_RSA_WITH_ARIA_128_CBC_SHA256 = 49230,
  TLS_ECDH_RSA_WITH_ARIA_256_CBC_SHA384 = 49231,
  TLS_RSA_WITH_ARIA_128_GCM_SHA256 = 49232,
  TLS_RSA_WITH_ARIA_256_GCM_SHA384 = 49233,
  TLS_DHE_RSA_WITH_ARIA_128_GCM_SHA256 = 49234,
  TLS_DHE_RSA_WITH_ARIA_256_GCM_SHA384 = 49235,
  TLS_DH_RSA_WITH_ARIA_128_GCM_SHA256 = 49236,
  TLS_DH_RSA_WITH_ARIA_256_GCM_SHA384 = 49237,
  TLS_DHE_DSS_WITH_ARIA_128_GCM_SHA256 = 49238,
  TLS_DHE_DSS_WITH_ARIA_256_GCM_SHA384 = 49239,
  TLS_DH_DSS_WITH_ARIA_128_GCM_SHA256 = 49240,
  TLS_DH_DSS_WITH_ARIA_256_GCM_SHA384 = 49241,
  TLS_DH_anon_WITH_ARIA_128_GCM_SHA256 = 49242,
  TLS_DH_anon_WITH_ARIA_256_GCM_SHA384 = 49243,
  TLS_ECDHE_ECDSA_WITH_ARIA_128_GCM_SHA256 = 49244,
  TLS_ECDHE_ECDSA_WITH_ARIA_256_GCM_SHA384 = 49245,
  TLS_ECDH_ECDSA_WITH_ARIA_128_GCM_SHA256 = 49246,
  TLS_ECDH_ECDSA_WITH_ARIA_256_GCM_SHA384 = 49247,
  TLS_ECDHE_RSA_WITH_ARIA_128_GCM_SHA256 = 49248,
  TLS_ECDHE_RSA_WITH_ARIA_256_GCM_SHA384 = 49249,
  TLS_ECDH_RSA_WITH_ARIA_128_GCM_SHA256 = 49250,
  TLS_ECDH_RSA_WITH_ARIA_256_GCM_SHA384 = 49251,
  TLS_PSK_WITH_ARIA_128_CBC_SHA256 = 49252,
  TLS_PSK_WITH_ARIA_256_CBC_SHA384 = 49253,
  TLS_DHE_PSK_WITH_ARIA_128_CBC_SHA256 = 49254,
  TLS_DHE_PSK_WITH_ARIA_256_CBC_SHA384 = 49255,
  TLS_RSA_PSK_WITH_ARIA_128_CBC_SHA256 = 49256,
  TLS_RSA_PSK_WITH_ARIA_256_CBC_SHA384 = 49257,
  TLS_PSK_WITH_ARIA_128_GCM_SHA256 = 49258,
  TLS_PSK_WITH_ARIA_256_GCM_SHA384 = 49259,
  TLS_DHE_PSK_WITH_ARIA_128_GCM_SHA256 = 49260,
  TLS_DHE_PSK_WITH_ARIA_256_GCM_SHA384 = 49261,
  TLS_RSA_PSK_WITH_ARIA_128_GCM_SHA256 = 49262,
  TLS_RSA_PSK_WITH_ARIA_256_GCM_SHA384 = 49263,
  TLS_ECDHE_PSK_WITH_ARIA_128_CBC_SHA256 = 49264,
  TLS_ECDHE_PSK_WITH_ARIA_256_CBC_SHA384 = 49265,
  TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_CBC_SHA256 = 49266,
  TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_CBC_SHA384 = 49267,
  TLS_ECDH_ECDSA_WITH_CAMELLIA_128_CBC_SHA256 = 49268,
  TLS_ECDH_ECDSA_WITH_CAMELLIA_256_CBC_SHA384 = 49269,
  TLS_ECDHE_RSA_WITH_CAMELLIA_128_CBC_SHA256 = 49270,
  TLS_ECDHE_RSA_WITH_CAMELLIA_256_CBC_SHA384 = 49271,
  TLS_ECDH_RSA_WITH_CAMELLIA_128_CBC_SHA256 = 49272,
  TLS_ECDH_RSA_WITH_CAMELLIA_256_CBC_SHA384 = 49273,
  TLS_RSA_WITH_CAMELLIA_128_GCM_SHA256 = 49274,
  TLS_RSA_WITH_CAMELLIA_256_GCM_SHA384 = 49275,
  TLS_DHE_RSA_WITH_CAMELLIA_128_GCM_SHA256 = 49276,
  TLS_DHE_RSA_WITH_CAMELLIA_256_GCM_SHA384 = 49277,
  TLS_DH_RSA_WITH_CAMELLIA_128_GCM_SHA256 = 49278,
  TLS_DH_RSA_WITH_CAMELLIA_256_GCM_SHA384 = 49279,
  TLS_DHE_DSS_WITH_CAMELLIA_128_GCM_SHA256 = 49280,
  TLS_DHE_DSS_WITH_CAMELLIA_256_GCM_SHA384 = 49281,
  TLS_DH_DSS_WITH_CAMELLIA_128_GCM_SHA256 = 49282,
  TLS_DH_DSS_WITH_CAMELLIA_256_GCM_SHA384 = 49283,
  TLS_DH_anon_WITH_CAMELLIA_128_GCM_SHA256 = 49284,
  TLS_DH_anon_WITH_CAMELLIA_256_GCM_SHA384 = 49285,
  TLS_ECDHE_ECDSA_WITH_CAMELLIA_128_GCM_SHA256 = 49286,
  TLS_ECDHE_ECDSA_WITH_CAMELLIA_256_GCM_SHA384 = 49287,
  TLS_ECDH_ECDSA_WITH_CAMELLIA_128_GCM_SHA256 = 49288,
  TLS_ECDH_ECDSA_WITH_CAMELLIA_256_GCM_SHA384 = 49289,
  TLS_ECDHE_RSA_WITH_CAMELLIA_128_GCM_SHA256 = 49290,
  TLS_ECDHE_RSA_WITH_CAMELLIA_256_GCM_SHA384 = 49291,
  TLS_ECDH_RSA_WITH_CAMELLIA_128_GCM_SHA256 = 49292,
  TLS_ECDH_RSA_WITH_CAMELLIA_256_GCM_SHA384 = 49293,
  TLS_PSK_WITH_CAMELLIA_128_GCM_SHA256 = 49294,
  TLS_PSK_WITH_CAMELLIA_256_GCM_SHA384 = 49295,
  TLS_DHE_PSK_WITH_CAMELLIA_128_GCM_SHA256 = 49296,
  TLS_DHE_PSK_WITH_CAMELLIA_256_GCM_SHA384 = 49297,
  TLS_RSA_PSK_WITH_CAMELLIA_128_GCM_SHA256 = 49298,
  TLS_RSA_PSK_WITH_CAMELLIA_256_GCM_SHA384 = 49299,
  TLS_PSK_WITH_CAMELLIA_128_CBC_SHA256 = 49300,
  TLS_PSK_WITH_CAMELLIA_256_CBC_SHA384 = 49301,
  TLS_DHE_PSK_WITH_CAMELLIA_128_CBC_SHA256 = 49302,
  TLS_DHE_PSK_WITH_CAMELLIA_256_CBC_SHA384 = 49303,
  TLS_RSA_PSK_WITH_CAMELLIA_128_CBC_SHA256 = 49304,
  TLS_RSA_PSK_WITH_CAMELLIA_256_CBC_SHA384 = 49305,
  TLS_ECDHE_PSK_WITH_CAMELLIA_128_CBC_SHA256 = 49306,
  TLS_ECDHE_PSK_WITH_CAMELLIA_256_CBC_SHA384 = 49307,
  TLS_RSA_WITH_AES_128_CCM = 49308,
  TLS_RSA_WITH_AES_256_CCM = 49309,
  TLS_DHE_RSA_WITH_AES_128_CCM = 49310,
  TLS_DHE_RSA_WITH_AES_256_CCM = 49311,
  TLS_RSA_WITH_AES_128_CCM_8 = 49312,
  TLS_RSA_WITH_AES_256_CCM_8 = 49313,
  TLS_DHE_RSA_WITH_AES_128_CCM_8 = 49314,
  TLS_DHE_RSA_WITH_AES_256_CCM_8 = 49315,
  TLS_PSK_WITH_AES_128_CCM = 49316,
  TLS_PSK_WITH_AES_256_CCM = 49317,
  TLS_DHE_PSK_WITH_AES_128_CCM = 49318,
  TLS_DHE_PSK_WITH_AES_256_CCM = 49319,
  TLS_PSK_WITH_AES_128_CCM_8 = 49320,
  TLS_PSK_WITH_AES_256_CCM_8 = 49321,
  TLS_PSK_DHE_WITH_AES_128_CCM_8 = 49322,
  TLS_PSK_DHE_WITH_AES_256_CCM_8 = 49323,
  TLS_ECDHE_ECDSA_WITH_AES_128_CCM = 49324,
  TLS_ECDHE_ECDSA_WITH_AES_256_CCM = 49325,
  TLS_ECDHE_ECDSA_WITH_AES_128_CCM_8 = 49326,
  TLS_ECDHE_ECDSA_WITH_AES_256_CCM_8 = 49327,
  TLS_ECCPWD_WITH_AES_128_GCM_SHA256 = 49328,
  TLS_ECCPWD_WITH_AES_256_GCM_SHA384 = 49329,
  TLS_ECCPWD_WITH_AES_128_CCM_SHA256 = 49330,
  TLS_ECCPWD_WITH_AES_256_CCM_SHA384 = 49331,
  OLD_TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 = 52243,
  OLD_TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 = 52244,
  OLD_TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256 = 52245,
  TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256 = 52392,
  TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256 = 52393,
  TLS_DHE_RSA_WITH_CHACHA20_POLY1305_SHA256 = 52394,
  TLS_PSK_WITH_CHACHA20_POLY1305_SHA256 = 52395,
  TLS_ECDHE_PSK_WITH_CHACHA20_POLY1305_SHA256 = 52396,
  TLS_DHE_PSK_WITH_CHACHA20_POLY1305_SHA256 = 52397,
  TLS_RSA_PSK_WITH_CHACHA20_POLY1305_SHA256 = 52398,
  TLS_ECDHE_PSK_WITH_AES_128_GCM_SHA256 = 53249,
  TLS_ECDHE_PSK_WITH_AES_256_GCM_SHA384 = 53250,
  TLS_ECDHE_PSK_WITH_AES_128_CCM_8_SHA256 = 53251,
  TLS_ECDHE_PSK_WITH_AES_128_CCM_SHA256 = 53253,
  Unknown = 65535
}
