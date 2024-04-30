package com.app.filter;

import java.io.IOException;

import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.ServletRequest;
import jakarta.servlet.ServletResponse;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/* This class implements the custom filter by extending org.springframework.web.filter.GenericFilterBean.
 * Override the doFilter method with ServletRequest, ServletResponse and FilterChain.
 * This is used to authorize the API access for the application.
 */
@Component
public class JwtUserFilter extends GenericFilterBean {
	private static final String SECRET_KEY = "secret";

	@Override
	public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain)
			throws IOException, ServletException {

		final HttpServletRequest request = (HttpServletRequest) servletRequest;
		final HttpServletResponse response = (HttpServletResponse) servletResponse;

		final String authHeader = request.getHeader("authorization");
		String jwtToken = null;
		if ("OPTIONS".equals(request.getMethod())) {
			response.setStatus(HttpServletResponse.SC_OK);
			filterChain.doFilter(request, response);
		} else {
			/*
			 * Check if authHeader is null or does not start with "Bearer " then throw
			 * Exception
			 */
			if (authHeader == null || !authHeader.startsWith("Bearer ")) {
				throw new IOException("Bad Token");
			}
			/*
			 * Extract token from authHeader
			 */
			jwtToken = authHeader.substring(7);

				/*
				 * Obtain Claims by parsing the token with the signing key value "secret"
				 */
				final Claims claims = Jwts.parser().setSigningKey(SECRET_KEY).parseClaimsJws(jwtToken).getBody();

				/*
				 * Extract role from Claims and check if it is "user" or "admin" and then allow
				 * only USER Role
				 */
				String role = claims.get("role").toString();
				System.out.println("Role " + role);
				if ("USER".equals(role)) {

					/*
					 * Set Claims object obtained in previous step with key "claims" as request
					 * attribute
					 */
					request.setAttribute("claims", claims);

					/*
					 * Set user id passed as request parameter with key "user" as request attribute
					 */

					request.setAttribute("user", role);
				}

			filterChain.doFilter(request, response);
		}
	}
}
