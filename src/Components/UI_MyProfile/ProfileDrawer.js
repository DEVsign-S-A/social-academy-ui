import { Button, Col, Divider, Drawer, Image, Row, Space } from "antd";
import React from "react";
import { useSelector } from "react-redux";
// import { getUserInfo } from "../../Redux/Actions/userInfoActions";

export const ProfileDrawer = ({ onCloseDrawer, pDrawer, idUsuario, screen }) => {
	const user = useSelector((state) => state.user);
	const {
		nombreUsuario,
		fotoPerfil,
		correo,
		fechaNacimiento,
		carrera,
		ciudad,
		departamento,
		pais,
		telefono,
		linkedin,
		facebook,
		instagram,
		twitter,
		descripcion,
		habilidades,
		idiomas,
		extracurricular,
		experiencia,
		curriculumLink,
	} = user;

	const DescriptionItem = ({ title, content }) => (
		<div className="site-description-item-profile-wrapper">
			<p className="site-description-item-profile-p-label text-gray-600">
				<strong>{title}</strong>
			</p>
			{content}
		</div>
	);

	return (
		<>
			{user && (
				<>
					<Drawer
						width={screen}
						placement="right"
						closable={false}
						onClose={onCloseDrawer}
						visible={pDrawer}
						title={nombreUsuario}
						
					>
						<Image
							width={150}
							src={fotoPerfil}
							alt="fotoPerfil"
							className="rounded-2xl"
						/>

						<p
							className="site-description-item-profile-p font-Montserrat font-semibold text-xl text-gray-600"
							style={{ marginBottom: 24 }}
						>
							Informacion del usuario
						</p>
						<p className="site-description-item-profile-p font-Montserrat font-semibold text-gray-600">
							Informacion Personal
						</p>
						<Row>
							<Col span={12}>
								<DescriptionItem title="Nombre" content={nombreUsuario} />
							</Col>
							<Col span={12}>
								<DescriptionItem title="Correo" content={correo} />
							</Col>
						</Row>
						<br />
						<Row>
							<Col span={12}>
								<DescriptionItem title="Pais" content={pais} />
							</Col>
							<Col span={12}>
								<DescriptionItem title="Ciudad" content={ciudad} />
							</Col>
							<br />
							<Col span={12}>
								<DescriptionItem title="Departamento" content={departamento} />
							</Col>
						</Row>
						<br />
						<Row>
							<Col span={12}>
								<DescriptionItem
									title="Fecha de Nacimiento"
									content={fechaNacimiento}
								/>
							</Col>
							<Col span={12}>
								<DescriptionItem title="Telefono" content={telefono} />
							</Col>
						</Row>
						<br />
						<Row>
							<Col span={24}>
								<DescriptionItem title="Descripción" content={descripcion} />
							</Col>
						</Row>
						<br />
						<Divider />
						<p className="site-description-item-profile-p">Educacion</p>
						<Row>
							<Col span={12}>
								<DescriptionItem title="Carrera" content={carrera} />
							</Col>
							{habilidades && (
								<Col span={12}>
									<DescriptionItem title="Habilidades" />
									{habilidades.map((habilidad, index) => (
										<DescriptionItem content={`- ${habilidad}`} />
									))}
								</Col>
							)}
						</Row>
						<br />
						<Row>
							{idiomas && (
								<Col span={12}>
									<DescriptionItem title="Idiomas" />
									{idiomas.map((idioma, index) => (
										<DescriptionItem content={idioma} />
									))}
								</Col>
							)}
						</Row>
						<br />
						<Row>
							{extracurricular && (
								<Col span={24}>
									<DescriptionItem title="Actividades Extracurriculares" />
									{extracurricular.map((extracurricular, index) => (
										<DescriptionItem content={`- ${extracurricular}`} />
									))}
								</Col>
							)}
						</Row>
						<br />
						<Row>
							{experiencia && (
								<Col span={24}>
									<DescriptionItem title="Experiencia laboral" />
									{experiencia.map((experiencia, index) => (
										<>
											<DescriptionItem
												content={`Del ${experiencia.FechaInicio} al ${experiencia.FechaFinal}`}
											/>
											<DescriptionItem
												content={`- ${experiencia.descripcion}`}
											/>
										</>
									))}
								</Col>
							)}
						</Row>
						<br />
						<Divider />
						<p className="site-description-item-profile-p">Contacto</p>
						<Row>
							<Col span={12}>
								<DescriptionItem title="Correo" content={correo} />
							</Col>
							<Col span={12}>
								<DescriptionItem title="Telefono" content={telefono} />
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<DescriptionItem
									title="Facebook"
									content={
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={facebook}
										>
											{facebook}
										</a>
									}
								/>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<DescriptionItem
									title="Twitter"
									content={
										<a target="_blank" rel="noopener noreferrer" href={twitter}>
											{twitter}
										</a>
									}
								/>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<DescriptionItem
									title="Instagram"
									content={
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={instagram}
										>
											{instagram}
										</a>
									}
								/>
							</Col>
						</Row>
						<Row>
							<Col span={24}>
								<DescriptionItem
									title="Linkedin"
									content={
										<a
											target="_blank"
											rel="noopener noreferrer"
											href={linkedin}
										>
											{linkedin}
										</a>
									}
								/>
							</Col>
						</Row>
						<br />
						<br />
						<a
							target="_blank"
							rel="noopener noreferrer"
							href={curriculumLink}
							className="bg-BlueSocial p-4 ml-5 rounded-xl text-white font-Montserrat font-semibold hover:text-gray-50"
						>
							Ver Curriculum
						</a>
					</Drawer>
				</>
			)}
		</>
	);
};
